const domino = require('domino');
const fs = require('fs');
const template = fs.readFileSync('./dist/functions/browser/index.html').toString();
const win = domino.createWindow(template);
const filesBrowser = fs.readdirSync(`${process.cwd()}/dist/functions/browser`);

global.window = win;
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
global.document = win.document;
global.CSS = null;

import * as ts from 'typescript';

// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { readFileSync, writeFileSync, existsSync, mkdirSync, lstatSync } from 'fs';
import { join } from 'path';

import { enableProdMode } from '@angular/core';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { renderModuleFactory } from '@angular/platform-server';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist/functions/server/main.js`);
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

const BROWSER_FOLDER = join(process.cwd(), 'dist/functions/static');

// Load the index.html file containing referances to your application bundle.
const index = readFileSync('./dist/functions/browser/index.html', 'utf8');

let previousRender = Promise.resolve();

const angularConfiguration = JSON.parse(fs.readFileSync('./angular.json').toString());

let universalProjectEntryFile;

for (const project in angularConfiguration.projects) {
  if (angularConfiguration.projects.hasOwnProperty(project)) {
    for (const architect in angularConfiguration.projects[project].architect ) {
      if (angularConfiguration.projects[project].architect.hasOwnProperty(architect)) {
        const architectSettings = angularConfiguration.projects[project].architect[architect];
        if (architectSettings.builder === '@angular-devkit/build-angular:server') {
          universalProjectEntryFile = architectSettings.options.main;
        }
      }
    }
  }
}

const sourceDir = universalProjectEntryFile.substring(0, universalProjectEntryFile.lastIndexOf('/') + 1);

const entryFileSource = ts.createSourceFile('temp', fs.readFileSync(universalProjectEntryFile).toString(), ts.ScriptTarget.Latest);

let entryModulePath;

entryFileSource.forEachChild(node => {
  if (ts.isExportDeclaration(node)) {
    node.forEachChild(item => {
      if (ts.isStringLiteral(item)) {
        entryModulePath = (sourceDir + item.text + '.ts');
      }
    });
  }
});

// let importedModules = findImports(fs.readFileSync(entryModulePath).toString(), entryModulePath);

let routing = findRoutes(fs.readFileSync(entryModulePath).toString(), entryModulePath).routes;

function routingMapper(entry): any {
  if (entry.children) {
    return {path: entry.path, children: entry.children.map(routingMapper), visit: (!!entry.component || !!entry.redirectTo)};
  } else {
    return {path: entry.path, visit: (!!entry.component || !!entry.redirectTo)};
  }
}

routing = routing.map(routingMapper);

let allRoutes = [];

if (allRoutes.length === 0) {
  allRoutes.push('/');
}

console.log(`Got following static routes:`);
allRoutes.forEach(route => console.log(route));
console.log(`And following found in the application:`);

function addToRoutes(routes: any[], basePath: string): void {
  routes.forEach(element => {
    if (element.visit && element.path.indexOf(':') === -1) {
      if (allRoutes.indexOf(basePath + element.path) === -1 ) {
        allRoutes = allRoutes.concat(basePath + element.path);
        console.log(basePath + element.path);
      }
      if (element.children) {
        basePath += element.path !== '' ? element.path + '/' : element.path;
        addToRoutes(element.children, basePath);
      }
    }
  });
}

addToRoutes(routing, '/');

// Iterate each route path
allRoutes.forEach((route) => {
  const fullPath = join(BROWSER_FOLDER, route);

  // Make sure the directory structure is there
  if (!existsSync(fullPath)) {
    let syncpath = BROWSER_FOLDER;
    route.split('/').forEach((element) => {
      syncpath = syncpath + '/' + element;
      if (!fs.existsSync(syncpath)) {
        mkdirSync(syncpath);
      }
    });
  }

  // Writes rendered HTML to index.html, replacing the file if it already exists.
  previousRender = previousRender
    .then((_) =>
      renderModuleFactory(AppServerModuleNgFactory, {
        document: index,
        url: route,
        extraProviders: [
          provideModuleMap(LAZY_MODULE_MAP),
          {
            provide: REQUEST,
            useValue: { cookie: '', headers: {} },
          },
          {
            provide: RESPONSE,
            useValue: {},
          }
        ],
      }),
    )
    .then((html) => writeFileSync(join(fullPath, 'index.html'), html));
});

// copy static files
filesBrowser.forEach(file => {
  if (file !== 'index.html') {
    if (lstatSync(`./dist/functions/browser/${file}`).isFile()){
      fs.copyFileSync(`./dist/functions/browser/${file}`, `./dist/functions/static/${file}`);
    } else  if (lstatSync(`./dist/functions/browser/${file}`).isDirectory()){
      fs.mkdirSync(`./dist/functions/static/${file}`);
      fs.readdirSync(`${process.cwd()}/dist/functions/browser/${file}`).forEach(item => {
        if (lstatSync(`./dist/functions/browser/${file}/${item}`).isFile()){
          fs.copyFileSync(`./dist/functions/browser/${file}/${item}`, `./dist/functions/static/${file}/${item}`);
        } else  if (lstatSync(`./dist/functions/browser/${file}/${item}`).isDirectory()){
          fs.mkdirSync(`./dist/functions/static/${file}/${item}`);
          fs.readdirSync(`${process.cwd()}/dist/functions/browser/${file}/${item}`).forEach(t => {
            fs.copyFileSync(`./dist/functions/browser/${file}/${item}/${t}`, `./dist/functions/static/${file}/${item}/${t}`);
          });
        }
      });
    }
  }
});

function findRoutes(sourceCode: string, path: string): any {
  let identifiers = [];
  let routes = [];
  const SourceCodeObj = ts.createSourceFile('temp', sourceCode, ts.ScriptTarget.Latest);
  SourceCodeObj.getChildren().forEach(node => {
    node.getChildren().filter(e => ts.isClassDeclaration(e)).forEach((item: ts.Node) => {
      if (item.decorators) {
        item.forEachChild(t => t.forEachChild(decoratorNode => {
          if (ts.isCallExpression(decoratorNode) &&
            ts.isIdentifier(decoratorNode.expression) &&
            decoratorNode.expression.escapedText === 'NgModule'
          ) {
            decoratorNode.arguments.forEach( m => {
              if (ts.isObjectLiteralExpression(m)) {
                const importsNode = m.properties.find(p => {
                  return (p.name as ts.Identifier).escapedText === 'imports';
                });
                const identifierNodes = ((importsNode as ts.PropertyAssignment).initializer as ts.ArrayLiteralExpression).elements.filter(f => {
                  return ts.isIdentifier(f) || ts.isCallExpression(f);
                });

                identifierNodes.forEach(iden => {
                  if (ts.isCallExpression(iden)) {
                    if (((iden.expression as ts.PropertyAccessExpression).expression as ts.Identifier).escapedText === 'RouterModule') {
                      // RouterModule Found!
                      const argument = iden.arguments[0];
                      let routes2;
                      if (ts.isIdentifier(argument)) {
                        // variable
                        const varName = argument.escapedText;
                        SourceCodeObj.forEachChild(child => {
                          if (ts.isVariableStatement(child) && (child.declarationList.declarations[0].name as ts.Identifier).escapedText === varName)  {
                            const initializer = child.declarationList.declarations[0].initializer;
                            routes2 = sourceCode.substring(initializer.pos, initializer.end);
                          }
                        });

                      } else {
                        // array
                        routes2 = sourceCode.substring(iden.arguments.pos, iden.arguments.end);
                      }

                      routes2 = routes2.replace(/(.*?:\s)([^'"`].*?[^'"`])((\s*?),|(\s*?)})/g, '$1\'$2\'$3');
                      global.eval('routes = ' + routes2);
                      // console.log(routes);
                    }
                    iden = (iden.expression as ts.PropertyAccessExpression).expression;
                  }
                  identifiers.push((iden as ts.Identifier).escapedText);
                });
              }
            });
          }
        }));
      }
    });
  });

  SourceCodeObj.forEachChild(node => {
    if (ts.isImportDeclaration(node)) {
      node.importClause.namedBindings.forEachChild(name => {
        const identifierIndex = identifiers.indexOf((name as ts.ImportSpecifier).name.escapedText);
        if (identifierIndex > -1 && (node.moduleSpecifier as ts.StringLiteral).text.indexOf('.') === 0) {
          identifiers[identifierIndex] = {
            module: identifiers[identifierIndex],
            path: path.substring(0, entryModulePath.lastIndexOf('/') + 1) + (node.moduleSpecifier as ts.StringLiteral).text + '.ts'
          };
        }
      });
    }
  });

  identifiers = identifiers.filter(element => element.hasOwnProperty('module')).map(entry => {
    return {path: entry.path, importedIn: path};
  });

  if (routes.length === 0) {
    identifiers.forEach(identifier => {
      const nested = findRoutes(fs.readFileSync(identifier.path).toString(), identifier.path);
      // if (nested.length >= 1) {
      identifiers = identifiers.concat(nested.identifiers);
      routes = routes.concat(nested.routes);
      // }
    });
  }

  return {identifiers, routes };
}
