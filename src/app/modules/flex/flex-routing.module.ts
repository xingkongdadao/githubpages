import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JdHomeComponent} from './pages/jd-home/jd-home.component';


const routes: Routes = [
  {
    path: '',
    component: JdHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexRoutingModule { }
