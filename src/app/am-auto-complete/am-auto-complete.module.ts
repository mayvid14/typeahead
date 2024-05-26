import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterWordsPipe } from '../filter-words.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: AutoCompleteComponent
    }]),
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
