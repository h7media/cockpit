import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/shared/models/dashboard';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  @Input() dash: Dashboard = {
    clientesMes: 8797,
    clientesTotais: 3456,
    totalInvestido: 84732.99,
    totalVendido: 3482937.48
  }

  constructor() { }

  ngOnInit(): void {
  }

}
