import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './navigation/navigation.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IndianCultureComponent } from './indian-culture/indian-culture.component';
import {MatTableModule} from '@angular/material/table';
import { ContactComponent } from './contact/contact.component';

import { HttpClientModule,  } from '@angular/common/http';
import { ShansLoginComponent } from './shans-login/shans-login.component';
import { CultureComponent } from './culture/culture.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    
    NavigationComponent,
   
    HomeComponent,
        AboutComponent,
        IndianCultureComponent,
        ContactComponent,
        ShansLoginComponent,
        CultureComponent,
        ViewComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
