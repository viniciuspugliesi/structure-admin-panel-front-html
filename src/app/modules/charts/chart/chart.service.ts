import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChartService {

    constructor(private http: HttpClient) {
    }

    getDataLineChart() {
        return this.http.get('./assets/data/chart/line-chart.json');
    }
}
