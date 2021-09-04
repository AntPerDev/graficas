import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent {


  @Input() horizontal:boolean = false;


  public barChartOptions: ChartOptions = {
    responsive: true
  };


  @Input() barChartLabels: Label[] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    // { data: [0, 0, 0, 0, 0, 0, 0], label: 'Series C' }
  ];

  constructor() {
    console.log(this.horizontal);

  }


  ngOnInit(): void {
    if( this.horizontal ){
      this.barChartType = 'horizontalBar';
    }
  }






}
