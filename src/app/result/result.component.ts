import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.url.subscribe(val => this.result = decodeURI(val.join('/')));
  }

}
