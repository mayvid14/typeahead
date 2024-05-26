import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToFetchService } from '../../to-fetch.service';
import { Store } from '../../store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FilterWordsPipe } from '../../filter-words.pipe';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  options: Store[];
  show: Store[];
  form: UntypedFormGroup;

  constructor(private service: ToFetchService, private fb: UntypedFormBuilder, private filterPipe: FilterWordsPipe) { }

  ngOnInit() {
    this.form = this.fb.group({
      autoComp: ['']
    });
    this.service.getStores().subscribe((val: Store[]) => {
      this.options = val;
      this.filter();
    }, err => this.options = this.service.getFakeStores());
  }

  filter(event?: KeyboardEvent) {
    if (event && event.key === 'Enter') {
      this.sub();
    }
    this.show = this.filterPipe.transform(this.options, this.form.value.autoComp);
  }

  sub() {
    window.location.href = './' + encodeURI(this.form.value.autoComp);
  }

}
