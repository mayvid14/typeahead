import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FilterWordsPipe } from '../filter-words.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: AutoCompleteComponent
    }]),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [AutoCompleteComponent],
  providers: [FilterWordsPipe]
})
export class AmAutoCompleteModule { }
