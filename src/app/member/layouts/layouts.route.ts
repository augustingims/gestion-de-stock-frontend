import { Routes } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

export const layoutsRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet: 'header'
  },
  {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
  }
];

