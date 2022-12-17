import { Component, NgZone, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { BaseChartDirective } from 'ng2-charts';
import { AuthService } from 'src/app/services/auth.service';
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
export class DashboardComponent implements OnInit, OnChanges {

  authButton: boolean = false;
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


  constructor(private _auth: AuthService, private _ngZone: NgZone, private router: Router) {

  }

  ngOnInit(): void {

    this.obtemContas();
    // //@ts-ignore
    // window.onGoogleLibraryLoad = () => {
    //   //@ts-ignore
    //   google.accounts.id.initialize({
    //     client_id: "74204654932-aad5irlv4mpdmg0251e1hnsrfrbes0tu.apps.googleusercontent.com",
    //     callback: this.handleCredentialResponse.bind(this)
    //   });
    //   //@ts-ignore
    //   google.accounts.id.renderButton(
    //     // @ts-ignore
    //     document.getElementById("buttonDiv"),
    //     { theme: "outline", size: "large" }  // customization attributes
    //   );
    //   //@ts-ignore
    //   google.accounts.id.prompt((notification: PromptMomentNotification) => { }); // also display the One Tap dialog
    // }
  }

  ngOnChanges(): void {

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

  // handleCredentialResponse(response: CredentialResponse) {
  //   console.log('entrou')
  //   this._auth.LoginWithGoogle(response.credential);
  //   this._ngZone.run(() => {
  //     this.router.navigate(['/dash']);
  //   })
  // }

  // getReport() {

  //   console.log('chamou')
  //   //@ts-ignore
  //   gapi.client.request({
  //     path: "/analytics/v3/data/ga?ids=ga%3A209071487&start-date=7daysAgo&end-date=yesterday&metrics=ga%3Ausers%2Cga%3Asessions&include-empty-rows=true&samplingLevel=DEFAULT",
  //     root: 'https://www.googleapis.com/',
  //     method: 'GET',
  //     headers: {
  //       authorization: 'Bearer ya29.a0AeTM1idGFH1yNzOekKqmiNICN2jlH-g7Z3SBqfia698Z6x8cvpaz7TtT6SiviB1wiNGQzimmfDf4BwXfyCSsHSEMP_pJ3P6V6Wt_v7Rv-wQF77lWl2o3mJhKQ3GWiVgrcCvtcLQLpdEdRWSI8BcnnqsLID2KaCgYKAToSARASFQHWtWOmGR2Cqfs1mlRb0JNFmcVksw0163'
  //     }
  //     //@ts-ignore
  //   }).then((response: any) => {
  //     var formattedJson = JSON.stringify(response.result, null, 2);
  //     console.log("🚀 ~ file: dashboard.component.ts:81 ~ DashboardComponent ~ displayResults ~ formattedJson", formattedJson)
  //   }, console.error.bind(console));

  obtemContas() {

    function start() {
      //@ts-ignore
      gapi.client.init({
        'apiKey': '74204654932-aad5irlv4mpdmg0251e1hnsrfrbes0tu.apps.googleusercontent.com'
      }).then(function () {
        //@ts-ignore
        return gapi.client.request({
          path: '/analytics/v3/management/accountSummaries',
          root: 'https://www.googleapis.com/',
          method: 'GET'
          //@ts-ignore
        }).then((response: any) => {
          var formattedJson = JSON.stringify(response.result, null, 2);
          console.log("🚀 ~ file: dashboard.component.ts:81 ~ DashboardComponent ~ displayResults ~ formattedJson", formattedJson)
        }, console.error.bind(console));
      });
    }

    //@ts-ignore
    gapi.load('client', start);
  }



  // }

  // queryReports() {

  //   console.log('chamou')
  //   //@ts-ignore
  //   gapi.client.request({
  //     path: '/v4/reports:batchGet?key=74204654932-aad5irlv4mpdmg0251e1hnsrfrbes0tu.apps.googleusercontent.com',
  //     root: 'https://analyticsreporting.googleapis.com/',
  //     method: 'POST',
  //     body: {
  //       reportRequests: [
  //         {
  //           viewId: 209071487,
  //           dateRanges: [
  //             {
  //               startDate: '7daysAgo',
  //               endDate: 'today'
  //             }
  //           ],
  //           metrics: [
  //             {
  //               expression: 'ga:sessions'
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //     //@ts-ignore
  //   }).then((response: any) => {
  //     var formattedJson = JSON.stringify(response.result, null, 2);
  //     console.log("🚀 ~ file: dashboard.component.ts:81 ~ DashboardComponent ~ displayResults ~ formattedJson", formattedJson)
  //   }, console.error.bind(console));
  // }

  // displayResults(response: any) {
  //   var formattedJson = JSON.stringify(response.result, null, 2);
  //   console.log("🚀 ~ file: dashboard.component.ts:81 ~ DashboardComponent ~ displayResults ~ formattedJson", formattedJson)
  // }


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
