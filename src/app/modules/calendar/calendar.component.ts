import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.initCalendar();
    }

    initCalendar() {
        let events = [];

        $('#full-calendar').fullCalendar({
            events,
            height   : 800,
            editable : true,
            header: {
                left   : 'month,agendaWeek,agendaDay',
                center : 'title',
                right  : 'today prev,next',
            },
        });
    }
}
