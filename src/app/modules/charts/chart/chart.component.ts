import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {ChartService} from './chart.service';

declare let $: any;

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

    constructor(private chartService: ChartService) {
    }

    ngOnInit() {
        this.initLineChart();
        this.initScatterChart();
        this.initBarChart();
        this.initEasyPieChart();
    }

    initLineChart() {
        this.chartService.getDataLineChart().subscribe(data => {
            new Chart($('#line-chart'), {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        });
    }

    initScatterChart() {
        this.chartService.getDataScatterChart().subscribe(data => {
            new Chart($('#scatter-chart'), {
                type: 'scatter',
                data: data,
                options: {
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom'
                        }]
                    }
                }
            });
        });
    }

    initBarChart() {
        this.chartService.getDataBarChart().subscribe(data => {
            new Chart($('#bar-chart'), {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        });
    }

    initEasyPieChart() {
        $('.easy-pie-chart').easyPieChart({
            onStep(from, to, percent) {
                this.el.children[0].innerHTML = `${Math.round(percent)} %`;
            },
        });
    }
}
