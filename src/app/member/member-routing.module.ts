import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layoutsRoutes } from './layouts/layouts.route';

const routes: Routes = [
  {
    path: '',
    data: {
      seo: {
        title: 'Tableau de bord - Gestion Stock',
        description: 'Tableau de bord'
      }
    },
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'statistiques',
    data: {
      seo: {
        title: 'Statistique - Gestion Stock',
        description: 'Statistique'
      }
    },
    loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule),
  },
  {
    path: 'articles',
    data: {
      seo: {
        title: 'Article - Gestion Stock',
        description: 'Article'
      }
    },
    loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'mvtstk',
    data: {
      seo: {
        title: 'Mvtstk - Gestion Stock',
        description: 'mvtstk'
      }
    },
    loadChildren: () => import('./pages/mvt-stock/mvt-stock.module').then(m => m.MvtStockModule)
  },
  {
    path: 'clients',
    data: {
      seo: {
        title: 'Client - Gestion Stock',
        description: 'Clients'
      }
    },
    loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'fournisseurs',
    data: {
      seo: {
        title: 'Fournisseur - Gestion Stock',
        description: 'fournisseurs'
      }
    },
    loadChildren: () => import('./pages/suppliers/suppliers.module').then(m => m.SuppliersModule)
  },
  {
    path: 'categories',
    data: {
      seo: {
        title: 'Category - Gestion Stock',
        description: 'Categories'
      }
    },
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'utilisateurs',
    data: {
      seo: {
        title: 'Utilisateur - Gestion Stock',
        description: 'Utilisateurs'
      }
    },
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'commandesclient',
    data: {
      origin: 'client',
      seo: {
        title: 'Commandes client - Gestion Stock',
        description: 'commandes client'
      }
    },
    loadChildren: () => import('./pages/cmd-customer-supplier/cmd-customer-supplier.module').then(m => m.CmdCustomerSupplierModule)
  },
  {
    path: 'commandesfournisseur',
    data: {
      origin: 'fournisseur',
      seo: {
        title: 'Commandes fournisseur - Gestion Stock',
        description: 'commandes fournisseur'
      }
    },
    loadChildren: () => import('./pages/cmd-customer-supplier/cmd-customer-supplier.module').then(m => m.CmdCustomerSupplierModule)
  },
  {
    path: 'profil',
    data: {
      seo: {
        title: 'Profil - Gestion Stock',
        description: 'profil'
      }
    },
    loadChildren: () => import('./pages/profile/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'changermotdepasse',
    data: {
      seo: {
        title: 'Changer mot de passe - Gestion Stock',
        description: 'Changer mot de passe'
      }
    },
    loadChildren: () => import('./pages/profile/change-password/change-password.module').then(m => m.ChangePasswordModule)
  },
  ...layoutsRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
