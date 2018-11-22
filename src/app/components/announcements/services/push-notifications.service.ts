import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PushNotificationsService {

    getAnnouncementSubject(): Observable<any> {
        return of({ action: 'new message', text: 'test announcement' });
    }
}
