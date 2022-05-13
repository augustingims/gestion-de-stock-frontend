import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule { }
