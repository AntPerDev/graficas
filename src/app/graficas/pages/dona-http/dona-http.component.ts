import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100,334,250
    // ],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public color: Color[]=[
    {
      backgroundColor:[
         '#11DCFA',
         '#2FFC0D',
         '#E6B800',
         '#FF4201',
         '#C811F5',
      ]
    }
  ]

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe( data => {
    //   // console.log( data );

    //   const labels = Object.keys( data );
    //   const values = Object.values( data );

    //   // console.log( labels );

    //   this.doughnutChartData.push(values);
    //   this.doughnutChartLabels = labels;

    // })

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);

      }
    )
  }





}
