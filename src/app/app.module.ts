import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageService } from './services/page.service';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './components/pages/pages.component';

const appRoutes: Routes = [
 {path: ':page', component: PagesComponent},
 {path: '', component: PagesComponent} // default homepage
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
