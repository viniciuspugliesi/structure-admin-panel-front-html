import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CoreService} from './core.service';
import {LayoutDefaultComponent} from './layouts/layout-default/layout-default.component';
import {LayoutCleanComponent} from './layouts/layout-clean/layout-clean.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './layouts/components/footer/footer.component';
import {LoaderComponent} from './layouts/components/loader/loader.component';
import {NavComponent} from './layouts/components/nav/nav.component';
import {HeaderComponent} from './layouts/components/header/header.component';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        SharedModule,
        RouterModule,
    ],
    declarations: [
        LayoutDefaultComponent,
        LayoutCleanComponent,
        FooterComponent,
        LoaderComponent,
        NavComponent,
        HeaderComponent
    ],
    providers: [
        CoreService,
    ]
})
export class CoreModule {
}
