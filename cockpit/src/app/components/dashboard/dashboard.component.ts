import { AfterViewInit, Component, NgZone, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { BaseChartDirective } from 'ng2-charts';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { Dashboard } from 'src/app/shared/models/dashboard';
import UnidadeNegocio from 'src/app/shared/models/unidade-negocio';
// import {default as Annotation} from 'chartjs-plugin-annotation';
import { lineChartData, lineChartOptions, lineChartType } from 'src/app/shared/utils/fake-data-chart';
import { geradorUNGibim, geradorUNGreenRun, geradorUNVetFaro } from 'src/app/shared/utils/fake-data-clients';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  auth2: any;
  unidadeNegocio: UnidadeNegocio[] = []
  periodoSelecionado: string = ''
  clienteSelecionado: number = 0
  dados: any
  dash: Dashboard = {
    clientesMes: 8797,
    clientesTotais: 3456,
    totalInvestido: 84732.99,
    totalVendido: 3482937.48
  }
  contaSelecionada: string = ""
  idPropriedadeGA4 = "346801222"


  constructor(private _auth: AuthService,
    private _ngZone: NgZone,
    private router: Router,
    private google: GoogleApiService) {

  }

  ngOnInit(): void {
    this.google.obtemPropriedade(this.idPropriedadeGA4).subscribe(res => JSON.stringify(res))
  }

  obtemView() {
    this.google.getView().subscribe(res => {
      console.log(`view resultado ${JSON.stringify(res)}`);
    }, error => console.log("deu ruim " + error))
  }

  atribuiConta($event: any) {
    this.contaSelecionada = $event
    console.log("🚀 ~ file: dashboard.component.ts:55 ~ DashboardComponent ~ atribuiConta ~  this.contaSelecionada", this.contaSelecionada)
  }

  atribuiPeriodo($event: any) {
    this.periodoSelecionado = $event
    this.geraDadosCliente(this.clienteSelecionado)
    let somatoriaAlcance = this.unidadeNegocio.reduce((sum, current) => sum + current.alcance, 0);
    let somatoriaEngajamento = this.unidadeNegocio.reduce((sum, current) => sum + current.engajamento, 0);
    let somatoriaConversao = this.unidadeNegocio.reduce((sum, current) => sum + current.conversao, 0);
    let somatoriaRetencao = this.unidadeNegocio.reduce((sum, current) => sum + current.retencao, 0);
    this.dados = lineChartData([somatoriaAlcance, somatoriaEngajamento, somatoriaConversao, somatoriaRetencao])
  }
  atribuiCliente($event: any) {
    this.clienteSelecionado = +$event
    this.geraDadosCliente(this.clienteSelecionado)
    let somatoriaAlcance = this.unidadeNegocio.reduce((sum, current) => sum + current.alcance, 0);
    let somatoriaEngajamento = this.unidadeNegocio.reduce((sum, current) => sum + current.engajamento, 0);
    let somatoriaConversao = this.unidadeNegocio.reduce((sum, current) => sum + current.conversao, 0);
    let somatoriaRetencao = this.unidadeNegocio.reduce((sum, current) => sum + current.retencao, 0);
    this.dados = lineChartData([somatoriaAlcance, somatoriaEngajamento, somatoriaConversao, somatoriaRetencao])
  }

  geraDadosCliente(cliente: number) {
    this.unidadeNegocio = geradorUNGreenRun()
    // this.dash = {
    //   clientesMes: 8797 * 0.8,
    //   clientesTotais: 3456 * 0.8,
    //   totalInvestido: 84732.99 * 0.8,
    //   totalVendido: 3482937.48 * 0.8
    // }
    // switch (cliente) {
    //   case 1:
    //     this.unidadeNegocio = geradorUNGreenRun()
    //     this.dash = {
    //       clientesMes: 8797 * 0.8,
    //       clientesTotais: 3456 * 0.8,
    //       totalInvestido: 84732.99 * 0.8,
    //       totalVendido: 3482937.48 * 0.8
    //     }
    //     break;
    //   case 2:
    //     this.unidadeNegocio = geradorUNVetFaro()
    //     this.dash = {
    //       clientesMes: 8797 * 0.3,
    //       clientesTotais: 3456 * 0.4,
    //       totalInvestido: 84732.99 * 0.2,
    //       totalVendido: 3482937.48 * 0.3
    //     }
    //     break;
    //   case 3:
    //     this.unidadeNegocio = geradorUNGibim()
    //     this.dash = {
    //       clientesMes: 8797 * 0.9,
    //       clientesTotais: 3456 * 0.7,
    //       totalInvestido: 84732.99 * 0.5,
    //       totalVendido: 3482937.48 * 0.4
    //     }
    //     break;
    // }
  }

  public lineChartData = lineChartData([9500, 8500, 6500, 12000]);

  public lineChartOptions = lineChartOptions;

  public lineChartType = lineChartType;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = DashboardComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = DashboardComponent.generateNumber(i);
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
