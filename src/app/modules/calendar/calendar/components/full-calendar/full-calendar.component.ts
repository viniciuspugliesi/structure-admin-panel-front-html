import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

declare let $: any;

@Component({
    selector: 'app-full-calendar',
    templateUrl: './full-calendar.component.html'
})
export class FullCalendarComponent implements OnInit {
    calendar: Calendar;

    calendarEvents: Array<any> = [];

    constructor() {
    }

    @Input()
    set events(events: Array<any>) {
        this.calendarEvents = events;

        if (this.calendarEvents) {
            this.initCalendar();
        }
    }

    ngOnInit() {
        this.initCalendar();
    }

    initCalendar() {
        // const events = this.handlerEvents();

        let events = [
            {
                title: 'All Day Event',
                start: '2018-01-01',
            },
            {
                title: 'Long Event',
                start: '2018-01-07',
                end: '2018-01-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-01-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-01-11',
                end: '2018-01-13'
            },
            {
                title: 'Meeting',
                start: '2018-01-12T10:30:00',
                end: '2018-01-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-01-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-01-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-01-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-01-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-01-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-01-28'
            }
        ];

        if (this.calendar) {
            this.calendar.destroy();
        }

        this.calendar = new Calendar(document.getElementById('full-calendar'), {
            plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
            events,
            // timezone: 'UTC', // America/Sao_Paulo
            locale: 'en', // pt-br
            height: 800,
            editable: true,
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            eventLimit: false, // allow "more" link when too many events
            header: {
                left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                center: 'title',
                right: 'today prev,next',
            },
        });

        this.calendar.render();
    }

    private handlerEvents() {
        moment.locale('pt-br');

        return this.calendarEvents.map((event: any) => {
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
