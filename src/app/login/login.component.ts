import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route : Router) {}

  ngOnInit() :void{
    
  }
  buttonclick(){
    this.route.navigate(['/navigation/home'])
  }
  
  setSession(){
    localStorage.setItem('niva','athi')

  }
  getSession(){
    alert(localStorage.getItem('niva'));
    
  }
  clear(){
    localStorage.clear();
  }

}
