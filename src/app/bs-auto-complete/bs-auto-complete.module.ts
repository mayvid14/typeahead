import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { RouterModule } from '@angular/router';
import { TypeaheadModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: TypeAheadComponent
    }]),
    TypeaheadModule.forRoot(),
    FormsModule
  ],
  declarations: [TypeAheadComponent]
})
export class BsAutoCompleteModule { }
