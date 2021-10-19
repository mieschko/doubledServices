import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DuplicatedNameService} from "./duplicated-name.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DuplicatedNameService]
})
export class SecondServiceModule { }
