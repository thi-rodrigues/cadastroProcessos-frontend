import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Municipio } from 'src/app/model/municipio';
import { Uf } from 'src/app/model/uf';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-create',
  templateUrl: './processo-create.component.html',
  styleUrls: ['./processo-create.component.css']
})
export class ProcessoCreateComponent implements OnInit {

  processoForm: FormGroup;

  public ufs: Uf[] = [];
  public municipios: Municipio[] = [];

  constructor(
    private fb: FormBuilder,
    private processoService: ProcessoService
  ) { }

  ngOnInit(): void {
    this.processoForm = this.fb.group({
      npu: [null],
      dataVisualizacao: [null],
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
    this.processoService.findMunicipios(uf.sigla).subscribe(result => {
      this.municipios = result;
    });
  }

  save() {
    console.log(this.processoForm.value);

  }

}