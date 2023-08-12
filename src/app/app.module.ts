import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { InMemoryDataService } from './in-memory-data.service';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { passThruUnknownUrl: true, dataEncapsulation: false }
    )
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
