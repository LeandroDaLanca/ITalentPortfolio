import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  total: number = 33 + 50 + 33 + 13;
  amountExtra: number = 54;

  seminars: boolean = false;
  innovation: boolean = false;
  personalDevelopment: boolean = false;
  studentEngagement: boolean = false;
  extra: boolean = false;

  doughnutChartLabels: Label[] = ['Seminaries', 'Innovatieroute', 'Persoonlijke ontwikkeling', 'Student engagement', 'Extra']
  doughnutChartData: MultiDataSet = [
    [33, 50, 33, 13, 54]
  ]
  doughnutChartType: ChartType = 'doughnut';

  somethin(event: any, array: any[]) {
    console.log(event)
  }

  constructor() { }

  ngOnInit(): void {
  }

  onChartClicked(event: any) {
    if (event.active.length > 0) {
      const chart = event.active[0]._chart;
      const activePoints = chart.getElementAtEvent(event.event);
        if ( activePoints.length > 0) {
          // get the internal index of slice in pie chart
          const clickedElementIndex = activePoints[0]._index;
          const label = chart.data.labels[clickedElementIndex];
          // get value by index
          const value = chart.data.datasets[0].data[clickedElementIndex];
          this.activateActivity(label);
        }
     }
  }

  activateActivity(label: string) {
    switch(label) {
      case 'Seminaries':
        this.seminars = !this.seminars;
        break;
      case 'Innovatieroute':
        this.innovation = !this.innovation;
        break;
      case 'Persoonlijke ontwikkeling':
        this.personalDevelopment = !this.personalDevelopment;
        break;
      case 'Student engagement':
        this.studentEngagement = !this.studentEngagement;
        break;
      case 'Extra':
        this.extra = !this.extra;
        break;
      default:
        break;
    }
  }
}
