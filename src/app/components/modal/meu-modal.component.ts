import { AfterViewInit, Component, createPlatform, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Processo } from '../../model/processo';

@Component({
  selector: 'app-meu-modal',
  templateUrl: './meu-modal.component.html',
  styleUrls: ['./meu-modal.component.scss']
})

export class MeuModalComponent implements AfterViewInit, OnInit {

  @ViewChild('focar') buttonPraFocar: ElementRef;

  processoForm: FormGroup;

  processo: Processo = new Processo();

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('processo')))
    let processo: Processo = JSON.parse(localStorage.getItem('processo'));
    this.addProcesso(processo);
  }

  ngAfterViewInit() {
    this.buttonPraFocar.nativeElement.focus();
  }

  addProcesso(processo: Processo) {
    this.processo.id = processo.id;
    this.processo.npu = processo.npu;
    this.processo.uf = processo.uf;
    this.processo.municipio = processo.municipio;
    this.processo.dataCadastro = processo.dataCadastro;
    this.processo.dataVisualizacao = processo.dataVisualizacao;
    this.processo.pathUploadDocumento = processo.pathUploadDocumento;
  }
}
