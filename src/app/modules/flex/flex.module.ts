import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexRoutingModule } from './flex-routing.module';
import { JdHomeComponent } from './pages/jd-home/jd-home.component';


@NgModule({
  declarations: [JdHomeComponent],
  imports: [
    CommonModule,
    FlexRoutingModule
  ]
})
export class FlexModule { }
