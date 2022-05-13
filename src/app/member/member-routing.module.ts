import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { layoutsRoutes } from './layouts/layouts.route';
import { UserRouterAccesService } from '../core/auth/user-router-acces.service';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    canActivateChild: [UserRouterAccesService],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'statistiques',
        loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule),
      },
      {
        path: 'articles',
        loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path: 'mvtstk',
        loadChildren: () => import('./pages/mvt-stock/mvt-stock.module').then(m => m.MvtStockModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'fournisseurs',
        loadChildren: () => import('./pages/suppliers/suppliers.module').then(m => m.SuppliersModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'utilisateurs',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'commandesclient',
        data: {
          origin: 'client'
        },
        loadChildren: () => import('./pages/cmd-customer-supplier/cmd-customer-supplier.module').then(m => m.CmdCustomerSupplierModule)
      },
      {
        path: 'commandesfournisseur',
        data: {
          origin: 'fournisseur'
        },
        loadChildren: () => import('./pages/cmd-customer-supplier/cmd-customer-supplier.module').then(m => m.CmdCustomerSupplierModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./pages/profile/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'changermotdepasse',
        loadChildren: () => import('./pages/profile/change-password/change-password.module').then(m => m.ChangePasswordModule)
      },
      ...layoutsRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
