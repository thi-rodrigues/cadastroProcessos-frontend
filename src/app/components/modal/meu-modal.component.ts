import { AfterViewInit, Component, createPlatform, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Processo } from '../../model/processo';
import { ProcessoService } from '../../view/processo/processo.service';

@Component({
  selector: 'app-meu-modal',
  templateUrl: './meu-modal.component.html',
  styleUrls: ['./meu-modal.component.scss']
})

export class MeuModalComponent implements AfterViewInit, OnInit {

  @ViewChild('focar') buttonPraFocar: ElementRef;

  processoForm: FormGroup;

  processo: Processo = new Processo();

  name = 'Angular 5';
  fileUrl: any;

  constructor(
    public activeModal: NgbActiveModal,
    private processoService: ProcessoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('processo')))
    let processo: Processo = JSON.parse(localStorage.getItem('processo'));
    this.addProcesso(processo);
    this.download(null, null);
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

  download(idProcesso: number, pathUploadDocumento: string) {
    let sub = this.processoService.findById(idProcesso).subscribe(async (result: Blob | MediaSource) => {
      let a = window.document.createElement("a");

      let file = await fetch(pathUploadDocumento).then(r => r.blob()).then(blobFile => new File([blobFile], "fileNameGoesHere", { type: "image/png" }));

      a.href = window.URL.createObjectURL(file);
      a.download = pathUploadDocumento;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, (error) => {
      console.log(error);
    });

    // const data = 'some text';
    // const blob = new Blob([data], { type: 'application/octet-stream' });

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    // console.log(this.fileUrl);

    // this.processoService
    // .download('/downloads/archive.zip')
    // .subscribe(blob => {
    //   const a = document.createElement('a')
    //   const objectUrl = URL.createObjectURL(blob)
    //   a.href = objectUrl
    //   a.download = 'archive.zip';
    //   a.click();
    //   URL.revokeObjectURL(objectUrl);
    // })


  }
}
