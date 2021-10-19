import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeFeatureComponent } from './some-feature/some-feature.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: SomeFeatureComponent
  }
];

@NgModule({
  declarations: [
    SomeFeatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SomeFeatureModule { }
