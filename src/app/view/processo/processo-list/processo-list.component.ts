import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Processo } from 'src/app/model/processo';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-list',
  templateUrl: './processo-list.component.html',
  styleUrls: ['./processo-list.component.css']
})
export class ProcessoListComponent implements OnInit {

  public processos: Processo[] = [];

  totalPages: number[] = [];
  pageNumber: number = 0;
  paginaAtual: number = 0;

  constructor(
    private processoService: ProcessoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.totalPages = [];
    this.findAll(this.pageNumber);
  }

  delete(id: number) {
    this.processoService.deleteById(id).subscribe(() => {
      this.ngOnInit();
    }, (error) => {
      console.log(error);
    });
  }

  editar(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  findAll(page: number) {
    this.processoService.findAllProcessos(page).subscribe(result => {
      this.processos = result.content;

      for(var i=0; i < result.totalPages; i++) {
        this.totalPages[i] = i;
      }
    }, (error) => {
      console.log(error);
    });
  }

  page(page: number) {
    if (page >= 0) {
      this.paginaAtual = page;
      this.findAll(page);
    }
  }

}
