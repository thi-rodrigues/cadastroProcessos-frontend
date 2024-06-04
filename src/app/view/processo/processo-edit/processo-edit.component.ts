import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Uf } from 'src/app/model/uf';
import { Municipio } from 'src/app/model/municipio';
import { ProcessoService } from '../processo.service';
import { Processo } from 'src/app/model/processo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-processo-edit',
  templateUrl: './processo-edit.component.html',
  styleUrls: ['./processo-edit.component.css']
})
export class ProcessoEditComponent implements OnInit {

  processoForm: FormGroup;

  public ufs: Uf[] = [];
  public municipios: Municipio[] = [];
  public processo?: Processo;
  file: File;

  constructor(
    private fb: FormBuilder,
    private processoService: ProcessoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findUfs();
    this.find(Number.parseInt(this.route.snapshot.paramMap.get("id")));
  }

  createForm(processo: Processo) {
    this.processoForm = this.fb.group({
      id: [processo.id],
      npu: [processo.npu],
      uf: [processo.uf],
      municipio: [processo.municipio],
    });
  }

  findUfs() {
    this.processoService.findUfs().subscribe(result => {
      this.ufs = (result);
      this.findMunicipios();
    })
  }

  findMunicipios() {
    let uf = this.processoForm.value.uf;
    this.processoService.findMunicipios(uf).subscribe(result => {
      this.municipios = result;
    });
  }

  find(id: number) {
    this.processoService.findById(id).subscribe(result => {
      this.processo = result;
      this.createForm(result);
    });
  }

  edit() {
    let processo: Processo = this.processoForm.value;
    this.processoService.updateProcesso(processo, this.file).subscribe(result => {
      this.router.navigate(["/list"])
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
