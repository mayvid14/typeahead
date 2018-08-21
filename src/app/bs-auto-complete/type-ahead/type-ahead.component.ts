import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { ToFetchService } from '../../to-fetch.service';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {
  stores: string[] = [];
  selected: string;

  constructor(private service: ToFetchService) { }

  ngOnInit() {
    this.service.getStores().subscribe((val: Store[]) => {
      val.forEach(store => this.stores.push(store.name));
    }, error => {
      const arr = this.service.getFakeStores();
      arr.forEach(store => this.stores.push(store.name));
    });
  }

  sub(event: KeyboardEvent) {
    if (event && event.key === 'Enter') {
      window.location.href = './' + encodeURI(this.selected);
    }
  }

}
