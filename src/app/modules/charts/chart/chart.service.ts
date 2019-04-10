import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChartService {

    constructor(private http: HttpClient) {
    }

    getDataLineChart() {
        return this.http.get('./assets/data/chart/line-chart.json');
    }

    getDataScatterChart() {
        return this.http.get('./assets/data/chart/scatter-chart.json');
    }

    getDataBarChart() {
        return this.http.get('./assets/data/chart/bar-chart.json');
    }
}
