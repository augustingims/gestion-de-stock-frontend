import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { UserRouterAccessService } from './core/auth/user-router-access.service';
import { layoutsRoutes } from './member/layouts/layouts.route';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {
    path: '',
    data: {
      seo: {
        title: 'Espace Menbre - Gestion Stock',
        description: 'Espace utilisateur.'
      }
    },
    component: MemberComponent,
    canActivate: [UserRouterAccessService],
    canActivateChild: [UserRouterAccessService],
    loadChildren: () => import('./member/member-routing.module').then(m => m.MemberRoutingModule)
  },
  {
    path: 'login',
    data: {
      seo: {
        title: 'Connexion - Gestion Stock',
        description: 'Connexion a notre application gestion de stock'
      }
    },
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    data: {
      seo: {
        title: 'S\'inscrire - Gestion Stock',
        description: 'Creer votre entreprise chez nous'
      }
    },
    loadChildren: () => import('./public/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { initialNavigation: 'enabled', preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
