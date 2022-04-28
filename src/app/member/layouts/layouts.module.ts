import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { TopbarComponent } from '../components/topbar/topbar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SidebarComponent, HeaderComponent, MenuComponent, TopbarComponent],
  exports: [SidebarComponent, HeaderComponent, MenuComponent, TopbarComponent]
})
export class LayoutsModule { }
