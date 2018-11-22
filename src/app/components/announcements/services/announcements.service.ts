import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AnnouncementsService {

    getAnnouncements(): Observable<any> {
        const announcements = [1, 2, 3, 4].map((d) => {
            return {
                action: 'initial announce',
                text: `Announcement-${d}`
            };
        });
        return of(announcements);
    }
}
