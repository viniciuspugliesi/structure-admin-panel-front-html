import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutCleanComponent} from './core/layouts/layout-clean/layout-clean.component';
import {RedirectIfAuthenticatedGuard} from './shared/guards/redirect-if-authenticated/redirect-if-authenticated.guard';
import {LayoutDefaultComponent} from './core/layouts/layout-default/layout-default.component';
import {RedirectIfNotAuthenticatedGuard} from './shared/guards/redirect-if-not-authenticated/redirect-if-not-authenticated.guard';
import {PageBlankComponent} from './modules/page-blank/page-blank.component';
import {UiElementsComponent} from './modules/ui-elements/ui-elements.component';
import {FormsComponent} from './modules/forms/forms.component';
import {GoogleMapsComponent} from './modules/google-maps/google-maps.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: '', data: {base: true}, component: LayoutCleanComponent, canActivate: [RedirectIfAuthenticatedGuard], children: [
            {path: '', loadChildren: './modules/auth/auth.module#AuthModule'},
            {path: 'error', loadChildren: './modules/errors/error.module#ErrorModule'},
        ]
    },
    {
        path: '', data: {base: true}, component: LayoutDefaultComponent, canActivate: [RedirectIfNotAuthenticatedGuard], children: [
            {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
            {path: 'emails', loadChildren: './modules/email/email.module#EmailModule'},
            {path: 'tables', loadChildren: './modules/table/table.module#TableModule'},
            {path: 'charts', loadChildren: './modules/charts/charts.module#ChartsModule'},
            {path: 'chat', loadChildren: './modules/chat/chat.module#ChatModule'},
            {path: 'calendar', loadChildren: './modules/calendar/calendar.module#CalendarModule'},
            {path: 'maps/google-maps', component: GoogleMapsComponent},
            {path: 'forms', component: FormsComponent},
            {path: 'ui-elements', component: UiElementsComponent},
            {path: 'page-blank', component: PageBlankComponent},
        ]
    },
    {path: '**', redirectTo: '/error/404'},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
