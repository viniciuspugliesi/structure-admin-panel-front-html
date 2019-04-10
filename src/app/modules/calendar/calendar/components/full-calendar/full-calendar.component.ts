import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Calendar} from 'fullcalendar';

declare let $: any;

@Component({
    selector: 'app-full-calendar',
    templateUrl: './full-calendar.component.html'
})
export class FullCalendarComponent implements OnInit {
    _events: Array<any> = [];

    calendar: Calendar;

    constructor() {
    }

    ngOnInit() {
        this.initCalendar();
    }

    @Input()
    set events(events: Array<any>) {
        this._events = events;

        if (this._events) {
            this.initCalendar();
        }
    }

    initCalendar() {
        let events = this.handlerEvents();

        if (this.calendar) {
            this.calendar.destroy();
        }

        this.calendar = new Calendar($('#full-calendar'), {
            events: events,
            timezone: 'UTC', // America/Sao_Paulo
            locale: 'en', // pt-br
            height: 800,
            editable: true,
            // navLinks: true, // can click day/week names to navigate views
            selectable: true,
            eventLimit: false, // allow "more" link when too many events
            header: {
                left: 'month,agendaWeek,agendaDay',
                center: 'title',
                right: 'today prev,next',
            },
        });

        this.calendar.render();
    }

    private handlerEvents() {
        moment.locale('pt-br');

        return this._events.map((event: any) => {
            if (event.start) {
                event.start = moment(event.start);
            }

            if (event.end) {
                event.end = moment(event.end);
            }

            return event;
        });
    }
}
