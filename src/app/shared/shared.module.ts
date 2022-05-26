import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { QuicklinkModule } from 'ngx-quicklink';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    QuicklinkModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    QuicklinkModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoaderComponent
  ]
})
export class SharedModule { }
