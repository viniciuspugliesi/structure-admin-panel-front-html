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
                }, 600);
            }
        });
    }

    reload(): void {
        this.reloadPerfectScroll();
        this.reloadInputs();
        this.reloadInputPassword();
        this.reloadPopover();
        this.reloadTooltip();
    }

    setLoader(status: boolean): void {
        this.loaderStatus$.next(status);
    }

    getLoader(): Observable<boolean> {
        return this.loaderStatus$.asObservable();
    }

    reloadPopover() {
        $('[data-toggle="popover"]').popover();
    }

    reloadTooltip() {
        $('[data-toggle="tooltip"]').tooltip({
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
    }

    reloadPerfectScroll(): void {
        $('.scrollable').each((index, el) => {
            new PerfectScrollbar(el, {
                wheelPropagation: false
            });
        });
    }

    reloadInputs() {
        $(document).on('change', '.form-group-label .form-control', function () {
            if ($(this).val() && !$(this).hasClass('has-value')) {
                $(this).addClass('has-value');
            } else if (!$(this).val()) {
                $(this).removeClass('has-value');
            }
        });

        $('.form-group-label .form-control').each((index, el) => {
            if ($(el).val()) {
                $(el).addClass('has-value');
            } else {
                $(el).removeClass('has-value');
            }
        });
    }

    reloadInputPassword() {
        $(document).on('click', '.input-password', function () {
            let i = $(this).find('i');
            let input = $(this).parent().parent().parent().find('input');

            if (i.hasClass('fa-eye-slash')) {
                i.removeClass('fa-eye-slash').addClass('fa-eye');
                input.attr('type', 'text');
            } else {
                i.removeClass('fa-eye').addClass('fa-eye-slash');
                input.attr('type', 'password');
            }

            setTimeout(() => {
                input.focus();
            }, 100);
        });
    }
}
