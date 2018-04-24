import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import {FormsModule} from '@angular/forms';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Navbar3Component } from './navbar3/navbar3.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    Navbar2Component,
    RouterModule,
    Navbar3Component,
    FormsModule
  ],
  declarations: [Navbar2Component, Navbar3Component]
})

export class SharedModule { }
