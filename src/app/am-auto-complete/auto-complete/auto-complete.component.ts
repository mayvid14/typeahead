import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToFetchService } from '../../to-fetch.service';
import { Store } from '../../store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterWordsPipe } from '../../filter-words.pipe';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  options: Store[];
  show: Store[];
  form: FormGroup;

  constructor(private service: ToFetchService, private fb: FormBuilder, private filterPipe: FilterWordsPipe) { }

  ngOnInit() {
    this.form = this.fb.group({
      autoComp: ['']
    });
    this.service.getStores().subscribe((val: Store[]) => {
      this.options = val;
      this.filter();
    });
  }

  filter(event?: KeyboardEvent) {
    if (event && event.key === 'Enter') {
      this.sub();
    }
    this.show = this.filterPipe.transform(this.options, this.form.value.autoComp);
  }

  sub() {

  }

}
