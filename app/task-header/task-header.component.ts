import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/*export interface Status {
  value: string;
  viewValue: string;
}*/

export interface TasksElem {
  nazwa: string;
  idstatus: number;
  idpr: number;
  position: number;
  status: string;
  opis: string;
  termin: string;
  priorytet: string;
}

/*const statusElem: Status[] = [
  { value: 'do zrobienia', viewValue: 'do zrobienia' },
  { value: 'w toku', viewValue: 'w toku' },
  { value: 'gotowe', viewValue: 'gotowe'}
]*/

const ELEMENT_DATA: TasksElem[] = [
  { position: 1, idstatus: 1, idpr:1, nazwa: 'Zadanie 1', status: 'Do zrobienia', opis: ' Opis zadania 1', termin: '01.01.2021', priorytet: 'Sredni' },
  { position: 2, idstatus: 2, idpr:1, nazwa: 'Zadanie 2', status: 'Do zrobienia', opis: ' Opis zadania 2', termin: '01.01.2021', priorytet: 'Sredni' },
  { position: 3, idstatus: 3, idpr:1, nazwa: 'Zadanie 3', status: 'Do zrobienia', opis: ' Opis zadania 3', termin: '01.01.2021', priorytet: 'Sredni' },
  { position: 4, idstatus: 4, idpr:1, nazwa: 'Zadanie 4', status: 'Do zrobienia', opis: ' Opis zadania 4', termin: '01.01.2021', priorytet: 'Sredni' }
];


@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {

  displayedColumns: string[] = ['position','nazwa', 'status', 'opis', 'termin', 'priorytet'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

 
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  selected = 'Do zrobienia';
}
