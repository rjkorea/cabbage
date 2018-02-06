import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/board/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyComponent } from './components/board/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
