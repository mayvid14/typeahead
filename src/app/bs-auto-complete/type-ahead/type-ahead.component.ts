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
  selected: Store;

  constructor(private service: ToFetchService) { }

  ngOnInit() {
    this.service.getStores().subscribe((val: Store[]) => {
      val.forEach(store => this.stores.push(store.name));
    }, error => console.log(error));
  }

}
