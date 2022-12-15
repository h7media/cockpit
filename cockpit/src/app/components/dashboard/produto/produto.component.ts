import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import UnidadeNegocio from 'src/app/shared/models/unidade-negocio';
import { lineChartData, lineChartOptions, lineChartType } from 'src/app/shared/utils/fake-data-chart';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit, OnChanges {

  @Input() alcance: number = 0
  @Input() engajamento: number = 0
  @Input() conversao: number = 0
  @Input() retencao: number = 0
  @Input() titulo: string = ''
  @Input() cor: string = ''
  
  public lineChartData = lineChartData([this.alcance, this.engajamento, this.conversao, this.retencao], this.cor);

  public lineChartOptions = lineChartOptions;

  public lineChartType = lineChartType;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.lineChartData = lineChartData([this.alcance, this.engajamento, this.conversao, this.retencao], this.cor)
  }


  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = ProdutoComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = ProdutoComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(`Label ${this.lineChartData.labels.length}`);

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = ['1st Line', '2nd Line'];
    }

    this.chart?.update();
  }

}
