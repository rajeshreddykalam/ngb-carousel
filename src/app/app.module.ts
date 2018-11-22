import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';


import { AnnouncementsService } from './components/announcements/services/announcements.service';
import { PushNotificationsService } from './components/announcements/services/push-notifications.service';
import { WebSocketService } from './components/announcements/services/web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    NgbCarouselConfig,
    AnnouncementsService,
    PushNotificationsService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
