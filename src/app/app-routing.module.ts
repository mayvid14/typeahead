import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'material', loadChildren: () => import('./am-auto-complete/am-auto-complete.module').then(m => m.AmAutoCompleteModule) },
  { path: 'bootstrap', loadChildren: () => import('./bs-auto-complete/bs-auto-complete.module').then(m => m.BsAutoCompleteModule) },
  { path: '**', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
