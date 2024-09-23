import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {  FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './pages/about/about.component';
// import { ApidatasComponent } from './pages/apidatas/apidatas.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ShowusersComponent } from './showusers/showusers.component';
import { FooterComponent } from './footer/footer.component';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import {MatDialogModule} from "@angular/material/dialog";
import { DailogComponent } from './dailog/dailog.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
   
    ShowusersComponent,
        FooterComponent,
        DailogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
FormsModule,
ReactiveFormsModule,
MatFormFieldModule,
MatToolbarModule,
MatIconModule,
MatSidenavModule,
MatListModule,
HttpClientModule,
MatTableModule,
NgxLoadingButtonsModule,
MatDialogModule


    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
