import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './shared/modules/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { TopoComponent } from './components//dashboard/topo/topo.component';
import { ProdutoComponent } from './components/dashboard/produto/produto.component';

import { NgChartsModule } from 'ng2-charts';
import { OpcoesComponent } from './components/dashboard/topo/opcoes/opcoes.component';
import { DetalhesComponent } from './components/dashboard/topo/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    TopoComponent,
    ProdutoComponent,
    OpcoesComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FontAwesomeModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
