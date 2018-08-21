import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: 'material', loadChildren: './am-auto-complete/am-auto-complete.module#AmAutoCompleteModule'},
  {path: 'bootstrap', loadChildren: './bs-auto-complete/bs-auto-complete.module#BsAutoCompleteModule'},
  {path: '**', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
