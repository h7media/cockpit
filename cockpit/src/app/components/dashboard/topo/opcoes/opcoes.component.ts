import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faThumbsDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { PartialObserver } from 'rxjs';
import { GoogleApiService } from 'src/app/services/google-api.service';
import Clientes from 'src/app/shared/models/clientes';
import Conta, { ListaConta } from 'src/app/shared/models/conta';
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
  lstContas: Conta[] = []
  lstContasLoading = false

  periodos: Opcoes[] = periodos;

  @Output() periodo = new EventEmitter<string>();
  @Output() conta = new EventEmitter<string>();
  @Output() cliente = new EventEmitter<number>();

  constructor(private google: GoogleApiService) { }

  ngOnInit(): void {
    this.lstContasLoading = true
    this.google.obtemContas().subscribe((resp: any) => {
      let ret = resp as ListaConta
      this.lstContas = ret.accounts
    }, error => console.log(error), () => this.lstContasLoading = false);
  }

  selecionaPeriodo(value: string) {
    this.periodo.emit(value);
  }
  selecionaConta(value: string) {
    this.conta.emit(value);
  }
  selecionaCliente(value: number) {
    this.cliente.emit(value);
  }

}
