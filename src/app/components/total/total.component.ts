import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  
 total: any = Number;
 mensaje: any= String;

  constructor() { }

  ngOnInit(): void {
  }

}
