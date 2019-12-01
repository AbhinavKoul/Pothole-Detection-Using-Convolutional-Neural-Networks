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
    {"location":"Marathali","noofpotholes":"23","roadname":"KalamandirRoad"},
{"location":"Marathali","noofpotholes":"29","roadname":"14th CrossRoad"},
{"location":"Marathali","noofpotholes":"24","roadname":"Chinnapalli LakeRoad"},
{"location":"Marathali", "noofpotholes":"21","roadname":"OuterRing Road"},
{"location":"Marathali","noofpotholes":"12","roadname":"Service Road"},
{"location":"Marathali","noofpotholes":"14","roadname":"Lingeshwara Temple Road"},
{"location":"Silkboard","noofpotholes":"17","roadname":"9th Main Road"},
{"location":"Silkboard","noofpotholes":"19","roadname":"Hosur Road"},
{"location":"Silkboard","noofpotholes":"8","roadname":"Signal Right Road"},
{"location":"Silkboard","noofpotholes":"7","roadname":"Flyover Road"},
{"location":"Hebbal","noofpotholes":"23","roadname":"7h Main Road"},
{"location":"Hebbal","noofpotholes":"12","roadname":"13 Main Road"},
{"location":"Hebbal","noofpotholes":"23","roadname":"4 Cross Road"},
{"location":"Hebbal","noofpotholes":"15","roadname":"14th Main Road"},
{"location":"Hebbal","noofpotholes":"7","roadname":"SSA Road"},
{"location":"Hebbal","noofpotholes":"19","roadname":"`1st Cross  Road"},
{"location":"Hebbal","noofpotholes":"12","roadname":"bypass Road"},
{"location":"Hebbal","noofpotholes":"14","roadname":"4th Main Road"},
{"location":"Hebbal","noofpotholes":"7","roadname":"9th Cross Road"},
{"location":"Hebbal","noofpotholes":"7","roadname":"Police Staion Road"},
{"location":"Hebbal","noofpotholes":"18","roadname":"Ring Road"},
{"location":"Hebbal","noofpotholes":"5","roadname":"Bethel Church Road"},
{"location":"SanjayNagar","noofpotholes":"21","roadname":"Bethel Church Road"},
{"location":"SanjayNagar","noofpotholes":"7","roadname":"Temple Road"},
{"location":"SanjayNagar","noofpotholes":"5","roadname":" Right Road"},
{"location":"SanjayNagar","noofpotholes":"7","roadname":"Flyover Road"},
{"location":"SanjayNagar","noofpotholes":"27","roadname":""},
{"location":"T Nagar","noofpotholes":"23","roadname":"Reddy Road"},
{"location":"T Nagar","noofpotholes":"8","roadname":"Left Wing Road"},
{"location":"T Nagar","noofpotholes":"23","roadname":"32th Main Road"},
{"location":"T Nagar","noofpotholes":"15","roadname":"Station Road"},
{"location":"T Nagar","noofpotholes":"15","roadname":"Main Ring Road"},
{"location":"T Nagar","noofpotholes":"15","roadname":"Staion Road"},
{"location":"T Nagar","noofpotholes":"15","roadname":"Reddy Road"},
{"location":"T Nagar","noofpotholes":"6","roadname":"Iyenagar Road"},
{"location":"T Nagar","noofpotholes":"19","roadname":"Abu Bakr Road"},
{"location":"T Nagar","noofpotholes":"23","roadname":"Jehovah Road"},
{"location":"T Nagar","noofpotholes":"7","roadname":"Annamma Road"},
{"location":"T Nagar","noofpotholes":"17","roadname":" 8th Cross Road"},
{"location":"T Nagar","noofpotholes":"23","roadname":"5th Cross Road"}
  ];
  
}
