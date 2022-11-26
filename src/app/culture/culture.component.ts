import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})


export class CultureComponent implements OnInit {
  
  constructor( private router:Router) {}
  Data:any = [
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
  ngOnInit(): void {}
  onSubmit(){
    this.router.navigate(['/navigation/view'])
    console.log('data');
    
  }
}
