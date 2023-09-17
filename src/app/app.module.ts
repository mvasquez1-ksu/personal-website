import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { InMemoryDataService } from './in-memory-data.service';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';
import { ContentService } from './content.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { ContactService } from './contact.service';
import { NavService } from './nav.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    ProjectComponent,
    ExperienceComponent,
    EducationComponent,
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
