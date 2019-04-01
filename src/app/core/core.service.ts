import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivationEnd, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import PerfectScrollbar from 'perfect-scrollbar';

declare let $: any;

@Injectable()
export class CoreService {
    private loaderStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart || event instanceof ActivationEnd) {
                this.setLoader(true);
            }

            if (event instanceof NavigationEnd) {
                this.reload();

                let self = this;
                setTimeout(function () {
                    self.setLoader(false);
                }, 1000);
            }
        });
    }

    reload(): void {
        this.reloadPerfectScroll();
        this.reloadTooltip();
    }

    reloadTooltip() {
        // $('[data-toggle="tooltip"]').tooltip();
    }

    reloadPerfectScroll() : void {
        let scrollables = $('.scrollable');

        if (scrollables.length > 0) {
            scrollables.each((index, el) => {
                new PerfectScrollbar(el, {
                    wheelPropagation: false
                });
            });
        }
    }

    setLoader(status: boolean): void {
        this.loaderStatus$.next(status);
    }

    getLoader(): Observable<boolean> {
        return this.loaderStatus$.asObservable();
    }
}
