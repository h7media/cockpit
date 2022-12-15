import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  @Output() periodoSelecionado = new EventEmitter<string>();
  @Output() clienteSelecionado = new EventEmitter<number>();
  constructor() { }


  ngOnInit(): void {
  }

  informaPeriodo(value: any) {
    this.periodoSelecionado.emit(value);
  }
  informaCliente(value: any) {
    this.clienteSelecionado.emit(+value);
  }



}
