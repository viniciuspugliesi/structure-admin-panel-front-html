import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Event} from '../../../shared/domain/event';

@Injectable()
export class CalendarService {

    constructor(private http: HttpClient) {
    }

    getEvents(): Observable<Array<Event>> {
        return this.http.get<Array<Event>>('http://www.json-generator.com/api/json/get/bPSmpejTAO?indent=2');
    }
}
