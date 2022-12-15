import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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

  clientes: Opcoes[] = [
    {value: 'green-run', viewValue: 'Green Run'},
    {value: 'vetfaro', viewValue: 'Vetfaro'},
    {value: 'gibim', viewValue: 'Gibim'},
  ];
  periodos: Opcoes[] = [
    {value: '7days', viewValue: 'Últimos 7 dias'},
    {value: '15days', viewValue: 'Últimos 15 dias'},
    {value: '30days', viewValue: 'Últimos 30 dias'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
