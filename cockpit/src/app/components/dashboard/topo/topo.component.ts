import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dashboard } from 'src/app/shared/models/dashboard';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  @Output() periodoSelecionado = new EventEmitter<string>();
  @Output() contaSelecionada = new EventEmitter<string>();
  @Output() clienteSelecionado = new EventEmitter<number>();
  @Input() dash: Dashboard = {
    clientesMes: 8797,
    clientesTotais: 3456,
    totalInvestido: 84732.99,
    totalVendido: 3482937.48
  }
  constructor() { }


  ngOnInit(): void {
  }

  informaPeriodo(value: any) {
    this.periodoSelecionado.emit(value);
  }
  informaConta(value: any) {
    this.contaSelecionada.emit(value);
  }
  informaCliente(value: any) {
    this.clienteSelecionado.emit(+value);
  }



}
