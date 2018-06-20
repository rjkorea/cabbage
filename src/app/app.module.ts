import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutesModule } from './routes.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/board/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyComponent } from './components/board/company/company.component';
import { ContentService } from './services/content.service';
import { FunctionService } from './services/function.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [
    ContentService,
    FunctionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
