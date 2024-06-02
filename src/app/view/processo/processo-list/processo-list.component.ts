import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processo } from 'src/app/model/processo';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-list',
  templateUrl: './processo-list.component.html',
  styleUrls: ['./processo-list.component.css']
})
export class ProcessoListComponent implements OnInit {

  public processos: Processo[] = [];

  constructor(
    private processoService: ProcessoService,
  ) { }

  ngOnInit(): void {
    this.processoService.buscarProcessos().subscribe(result => {
      this.processos = result.content;
      console.log(this.processos);
    }, (error) => {
      console.log(error);
    });
  }

}
