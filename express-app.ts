import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from './src/main.server';
import * as express from 'express';
import { join } from 'path';

// Express server
export const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist/functions/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/functions/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
// app.engine('html', ngExpressEngine({
//   bootstrap: AppServerModuleNgFactory,
//   providers: [
//     provideModuleMap(LAZY_MODULE_MAP)
//   ]
// }));

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});
