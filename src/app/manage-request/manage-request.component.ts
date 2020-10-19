import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';


export interface PickUpElement {
  PickupRequestId: string;
  Docket: string;
  IEC: string;
  NOE: string;
  FPO: string;
  Address: string;
  NoOfParcel: string;
  TypeOfParcel: string;
  Status: string;
}

const ELEMENT_DATA: PickUpElement[] = [
  { PickupRequestId: "", Docket: "", IEC: "", NOE: 'pi', FPO: 'kite', Address: 'Indore', NoOfParcel: "", TypeOfParcel: 'International', Status: 'pending' }
];
@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.scss']
})
export class ManageRequestComponent implements OnInit {

  startDate = new Date(1990, 0, 1);
  displayedColumns: string[] = ['PickupRequestId', 'Docket', 'IEC', 'NOE', 'FPO', 'Address', 'NoOfParcel', 'date', 'TypeOfParcel', 'agent', 'Status']
  dataSource = ELEMENT_DATA;
  selectedAgent: Agent = new Agent(1, 'Praveen Singh');
  agents = [
    new Agent(1, 'Praveen Singh'),
    new Agent(2, 'Naveen Mehta'),
    new Agent(3, 'Sandeep rathore'),
    new Agent(4, 'Praveen Singh')
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
