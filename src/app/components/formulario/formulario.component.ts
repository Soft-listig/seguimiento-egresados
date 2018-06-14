import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Formulario } from '../../../interfaces/formulario.interface';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  public perfil: FormGroup;
  public formulario: Formulario;
  public flag: boolean;
  constructor(private formBuilder: FormBuilder,  private afDB: AngularFireDatabase) {
    this.perfil = this.formBuilder.group({
    nombre: ['', Validators.compose([Validators.required])],
    paterno: ['', Validators.compose([Validators.required])],
    materno: ['', Validators.compose([Validators.required])],
    nacimiento: ['', Validators.compose([Validators.required])],
    curp: ['', Validators.compose([Validators.required, Validators.maxLength(19)])],
    sexo: ['', Validators.compose([Validators.required])],
    estado_civil: ['', Validators.compose([Validators.required])],
    calle: ['', Validators.compose([Validators.required])],
    num_interior: ['', Validators.compose([Validators.required, Validators.min(0), Validators.maxLength(4)])],
    colonia: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
    cp: ['', Validators.compose([Validators.required, Validators.maxLength(5)])],
    ciudad: ['', Validators.compose([Validators.required])],
    municipio: ['', Validators.compose([Validators.required])],
    estado: ['', Validators.compose([Validators.required])],
    tel: ['', Validators.compose([Validators.required, Validators.minLength(7)])],
    matricula: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    celular: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    tel_paterno: ['', Validators.compose([Validators.minLength(7)])],
    facebook: [''],
    twitter: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    carrera: ['', Validators.compose([Validators.required])],
    especialidad: ['', Validators.compose([Validators.required])],
    egreso: ['', Validators.compose([Validators.required])],
    titulado: ['', Validators.compose([Validators.required])],
    ingles: ['', Validators.compose([Validators.required, Validators.min(0)])],
    idioma_porcentaje: ['', Validators.compose([Validators.required, Validators.min(0)])],
    idioma_nombre: ['', Validators.compose([Validators.required])],
    softwares: [''],
    docentes: [''],
    plan_estudios: [''],
    investigacion_desarrollo: [''],
    investigacion_enseñanza: [''],
    infraestructura: [''],
    residencia: ['']

  });
}
  public ngOnInit() {
  }

  main_calcular() {
    this.formulario = this.perfil.value;
    console.log(this.formulario);
    this.afDB.list(`/Posts/`).push(this.formulario).then(()=>{
    console.log(this.formulario);
    this.flag = true;

  });

  }
}

