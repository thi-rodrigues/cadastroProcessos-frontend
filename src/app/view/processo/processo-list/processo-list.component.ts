import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processo } from 'src/app/model/processo';
import { ProcessoService } from '../processo.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MeuModalComponent } from '../../../components/modal/meu-modal.component';
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
  visualizado: boolean = false;

  public comoFechouModal: string = '';

  private opcoesModal: NgbModalOptions =
    {
      backdrop: true,
      centered: true,
      backdropClass: 'backdrop-modal',
      windowClass: 'position-modal',
      size: 'lg'
    };

  constructor(
    private processoService: ProcessoService,
    private router: Router,
    private modalService: NgbModal
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

      for (var i = 0; i < result.totalPages; i++) {
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

  open(idProcesso: number) {
    this.processoService.viewProcesso(idProcesso).subscribe(result => {
      this.findById(idProcesso);
    });
  }

  findById(idProcesso: number) {
    this.processoService.findById(idProcesso).subscribe(result => {
      localStorage.setItem('processo', JSON.stringify(result));
      this.modalService.open(MeuModalComponent, this.opcoesModal).result.then((result) => {
      }, (error) => {
        console.log(error);
      });
    })
  }

}
