import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-reports',
  templateUrl: './see-reports.component.html',
  styleUrls: ['./see-reports.component.css']
})
export class SeeReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  item:any[] = [
    {"category":"Mattikere","product":["area1","area1"],flag : true},
    {"category":"Bellandur","product":["area1l","area1o","area3"],flag : true},
    {"category":"malleshwaram","product":["area1","area1"],flag : true},
    {"category":"MG Road","product":["area1","area1","area1","area1"],flag : true}
  ];
  f2(i) {
    if (this.item[i].flag == true) { this.item[i].flag = false; }
    else {this.item[i].flag = true;}
  }
}
