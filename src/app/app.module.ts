import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContainerComponent } from './components/container/container.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactService } from './services/contact.service';
import { ContentService } from './services/content.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    ContactComponent,
    ContentSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
      dataEncapsulation: false,
    }),
  ],
  providers: [ContentService, ContactService, NavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
