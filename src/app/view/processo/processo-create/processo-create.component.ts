import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Municipio } from 'src/app/model/municipio';
import { Processo } from 'src/app/model/processo';
import { Uf } from 'src/app/model/uf';
import { ProcessoService } from '../processo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processo-create',
  templateUrl: './processo-create.component.html',
  styleUrls: ['./processo-create.component.css']
})
export class ProcessoCreateComponent implements OnInit {

  processoForm: FormGroup;

  public ufs: Uf[] = [];
  public municipios: Municipio[] = [];
  file: File;

  constructor(
    private fb: FormBuilder,
    private processoService: ProcessoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.processoForm = this.fb.group({
      npu: [null],
      uf: this.findUfs(),
      municipio: [null],
    });
  }

  findUfs() {
    this.processoService.findUfs().subscribe(result => {
      this.ufs = (result);
    })
  }

  findMunicipios() {
    let uf = this.processoForm.value.uf;
    this.processoService.findMunicipios(uf).subscribe(result => {
      this.municipios = result;
    });
  }

  save() {
    console.log(this.processoForm.value);
    let processo: Processo = this.processoForm.value;

    this.processoService.saveProcesso(processo, this.file).subscribe(result => {
      this.router.navigate(['/list'])
    });
  }

  fileSelect(e: any) {
    this.file = null;

    if (e.target.files[0].type.includes('pdf')) {
      this.file = e.target.files[0];
    } else {
      console.log('não suportado');
    }
  }

}
