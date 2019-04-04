import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {PageBlankComponent} from './modules/page-blank/page-blank.component';
import { UiElementsComponent } from './modules/ui-elements/ui-elements.component';
import { FormsComponent } from './modules/forms/forms.component';
import { ChatComponent } from './modules/chat/chat.component';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { ChartComponent } from './modules/chart/chart.component';
import { GoogleMapsComponent } from './modules/google-maps/google-maps.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
    ],
    declarations: [
        AppComponent,
        PageBlankComponent,
        UiElementsComponent,
        FormsComponent,
        ChatComponent,
        CalendarComponent,
        ChartComponent,
        GoogleMapsComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
