import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Inject
} from '@angular/core';

import {
  NgbSlideEvent,
  NgbCarousel
} from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

import { Subscription } from 'rxjs';
import * as _ from 'lodash';

import { AnnouncementsService } from './services/announcements.service';
import { PushNotificationsService } from './services/push-notifications.service';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'casm-bui-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
  providers: []
})
export class AnnouncementsComponent implements OnInit, OnDestroy {

  announcements: any = [];
  private subscriptions$: Subscription[] = [];

  @ViewChild('announcemementCarousel')
  announcemementCarousel: NgbCarousel;

  constructor(
    public announcementsService: AnnouncementsService,
    private pushNotificationService: PushNotificationsService,
    private webSocketService: WebSocketService
  ) { }

  ngOnInit() {
    this.initAnnouncementsLoad();
    this.initPushNotifications();
  }

  private initAnnouncementsLoad() {
    this.subscriptions$.push(
      this.announcementsService.getAnnouncements().subscribe((data) => {
        this.announcements = data;
      })
    );
  }

  private initPushNotifications() {
    this.subscriptions$.push(
      this.webSocketService
        .onOpen()
        .subscribe((data) => {
          this.pushNotificationService
            .getAnnouncementSubject()
            .subscribe((newAnnouncement) => {
              this.handleNewAnnouncement(newAnnouncement);
            }).unsubscribe();
        })
    );

  }
  // When push notification is received this method push it to Announcement results
  private handleNewAnnouncement(newAnnouncement) {
    if (newAnnouncement != null && newAnnouncement.action !== 'REGISTER') {
      this.announcements.push(newAnnouncement);
    }
  }

  ngOnDestroy(): void {
    _.each(this.subscriptions$, (sub) => {
      sub.unsubscribe();
    });
    this.subscriptions$ = [];
  }

}
