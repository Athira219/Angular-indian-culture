import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  
  Capital: string;
  Tradition: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Keralam', Capital:'Thiuvananthapuram', Tradition:'Kathakali'},
  {position: 2, name: 'Tamil Nadu', Capital:'Chennai',Tradition:'Bharata natyam'},
  {position: 3, name: 'Karnataka', Capital:'Bengaluru', Tradition:'Yakshagana'},
  {position: 4, name: 'Andhra Pradesh', Capital:'Amaravati',Tradition:'Kuchipidi'},
  {position: 5, name: 'Goa', Capital:'panaji', Tradition:'Goan dance'},
  {position: 6, name: 'Rajasthan', Capital:'Jaipur', Tradition:'Ghoomar'},
  {position: 7, name: 'Himachal Pradesh', Capital:'Shimala', Tradition:'Nati'},
  {position: 8, name: 'Sikkim',Capital:'Gangtok', Tradition:'Tashi sado'},
  {position: 9, name: 'Gujarat',Capital:'Gandhinagar', Tradition:'Garba'},
  {position: 10, name: 'Odisha', Capital:'Bhubaneshwar', Tradition:'Odissi'},
  
];

@Component({
  selector: 'app-indian-culture',
  templateUrl: './indian-culture.component.html',
  styleUrls: ['./indian-culture.component.css']
})
export class IndianCultureComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  


}
