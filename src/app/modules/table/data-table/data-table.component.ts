import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {
    @ViewChild('selector')
    private selector: ElementRef;

    constructor() {
    }

    ngOnInit() {
        $(this.selector.nativeElement).DataTable();
    }

}
