import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CultureComponent } from './culture/culture.component';

import { HomeComponent } from './home/home.component';
import { IndianCultureComponent } from './indian-culture/indian-culture.component';


import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShansLoginComponent } from './shans-login/shans-login.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"navigation", component:NavigationComponent,
   children: [{path:"home", component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"indianculture",component:IndianCultureComponent},
    {path:"Contact",component:ContactComponent},
    {path:"shanslogin",component:ShansLoginComponent},
    {path:"culture", component:CultureComponent},
    {path:"view",component:ViewComponent},
    ]}
    
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
