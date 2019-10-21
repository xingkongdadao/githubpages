import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'flex',
    pathMatch: 'full'
  },
  {
    path: 'flex',
    data: {preload: true},
    // loadChildren: () => {
    //   return import('./modules/flex/flex.module').then(m => m.FlexModule);
    // },
    loadChildren: './modules/flex/flex.module#FlexModule',
  },
  {
    path: 'admin',
    data: {preload: true},
    // loadChildren: () => {
    //   return import('./modules/admin/admin.module').then(m => m.AdminModule);
    // },
    loadChildren: './modules/admin/admin.module#AdminModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
