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
            new Chart($('#line-charts'), {
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
        new Chart($('#scatter-charts'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label           : 'My First dataset',
                    borderColor     : '#f44336',
                    backgroundColor : '#f44336',
                    data: [
                        { x: 10, y: 20 },
                        { x: 30, y: 40 },
                        { x: 50, y: 60 },
                        { x: 70, y: 80 },
                        { x: 90, y: 100 },
                        { x: 110, y: 120 },
                        { x: 130, y: 140 },
                    ],
                }, {
                    label           : 'My Second dataset',
                    borderColor     : '#4caf50',
                    backgroundColor : '#4caf50',
                    data: [
                        { x: 150, y: 160 },
                        { x: 170, y: 180 },
                        { x: 190, y: 200 },
                        { x: 210, y: 220 },
                        { x: 230, y: 240 },
                        { x: 250, y: 260 },
                        { x: 270, y: 280 },
                    ],
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });
    }

    initBarChart() {
        new Chart($('#bar-charts'), {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
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
    }

    initEasyPieChart() {
        $('.easy-pie-charts').easyPieChart({
            onStep(from, to, percent) {
                this.el.children[0].innerHTML = `${Math.round(percent)} %`;
            },
        });
    }
}
