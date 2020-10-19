import { Component, OnInit } from '@angular/core';

export interface PickUpElement {
  agentName: string;
  Status: string;
  NoOfParcel: string;
  VolWeight: string;
  ActualWeight: string;
  BagCapacity: string;
  pickup: string;

}

const ELEMENT_DATA: PickUpElement[] = [
  { agentName: "", VolWeight: "", ActualWeight: "", BagCapacity: 'pi', NoOfParcel: "", pickup: 'International', Status: 'pending' }
];
@Component({
  selector: 'app-manage-agent',
  templateUrl: './manage-agent.component.html',
  styleUrls: ['./manage-agent.component.scss']
})
export class ManageAgentComponent implements OnInit {
  displayedColumns: string[] = ['agentName', 'Status', 'NoOfParcel', 'VolWeight', 'ActualWeight', 'BagCapacity', 'pickup']
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
