import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.result = decodeURI(this.router.url);
  }

}
