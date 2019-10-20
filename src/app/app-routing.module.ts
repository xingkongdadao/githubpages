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
    loadChildren: () => {
      return import('./modules/flex/flex.module').then(m => m.FlexModule);
    },
    // loadChildren: './modules/flex/flex.module#FlexModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
