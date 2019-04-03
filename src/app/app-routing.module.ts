import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutCleanComponent} from './core/layouts/layout-clean/layout-clean.component';
import {RedirectIfAuthenticatedGuard} from './shared/guards/redirect-if-authenticated/redirect-if-authenticated.guard';
import {LayoutDefaultComponent} from './core/layouts/layout-default/layout-default.component';
import {RedirectIfNotAuthenticatedGuard} from './shared/guards/redirect-if-not-authenticated/redirect-if-not-authenticated.guard';
import {PageBlankComponent} from './modules/page-blank/page-blank.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {
        path: '', data: {base: true}, component: LayoutCleanComponent, canActivate: [RedirectIfAuthenticatedGuard], children: [
            {path: '', loadChildren: './modules/auth/auth.module#AuthModule'},
        ]
    },
    {
        path: 'dashboard', data: {base: true}, component: LayoutDefaultComponent, canActivate: [RedirectIfNotAuthenticatedGuard], children: [
            {path: '', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
        ]
    },
    {
        path: 'emails', data: {base: true}, component: LayoutDefaultComponent, canActivate: [RedirectIfNotAuthenticatedGuard], children: [
            {path: '', loadChildren: './modules/email/email.module#EmailModule'},
        ]
    },
    {
        path: 'tables', data: {base: true}, component: LayoutDefaultComponent, canActivate: [RedirectIfNotAuthenticatedGuard], children: [
            {path: '', loadChildren: './modules/table/table.module#TableModule'},
        ]
    },
    {
        path: 'page-blank', data: {base: true}, component: LayoutDefaultComponent, canActivate: [RedirectIfNotAuthenticatedGuard], children: [
            {path: '', component: PageBlankComponent},
        ]
    },
    {
        path: 'error', data: {base: true}, component: LayoutCleanComponent, children: [
            {path: '', loadChildren: './modules/errors/error.module#ErrorModule'},
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
