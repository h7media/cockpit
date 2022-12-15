import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Clientes from 'src/app/shared/models/clientes';
import { geradorClientes, periodos } from 'src/app/shared/utils/fake-data-clients';

interface Opcoes {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss']
})
export class OpcoesComponent implements OnInit {

  faUser = faUser

  lstClientes: Clientes[] = geradorClientes(['SEO', 'FACEBOOK', 'INSTAGRAM', 'SEM'])

  periodos: Opcoes[] = periodos;

  @Output() periodo = new EventEmitter<string>();
  @Output() cliente = new EventEmitter<number>();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  selecionaPeriodo(value: string) {
    this.periodo.emit(value);
  }
  selecionaCliente(value: number) {
    this.cliente.emit(value);
  }

}
