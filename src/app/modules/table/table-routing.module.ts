import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicTableComponent} from './basic-table/basic-table.component';
import {DataTableComponent} from './data-table/data-table.component';

const routes: Routes = [
    {path: 'basic-tables', component: BasicTableComponent},
    {path: 'data-tables', component: DataTableComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
