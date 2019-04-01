import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardDefaultComponent} from './dashboard-default/dashboard-default.component';
import {routing} from './dashboard-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
    ],
    declarations: [DashboardDefaultComponent]
})
export class DashboardModule {
}
