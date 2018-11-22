import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WebSocketService {

    onOpen(): Observable<any> {
        return interval(5000).pipe(
            map(() => { })
        );
    }
}
