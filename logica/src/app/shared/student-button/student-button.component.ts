import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { Student } from 'src/app/models/student';
import {StudentService} from 'src/app/services/student.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-student-button',
  templateUrl: './student-button.component.html',
  styleUrls: ['./student-button.component.scss'],
  standalone: true,
  imports:[IonicModule, HttpClientModule],
  providers: [StudentService]
})
export class StudentButtonComponent  implements OnInit {

  listaEstudiantes : Array<Student> = [];

  @Output() enviarLista:EventEmitter<Array<Student>>=new EventEmitter();

  constructor(private studentService:StudentService) { }

  ngOnInit() {}

  consultarServicio(): void{
    this.studentService.all().subscribe({
      next:(resp)=>{
        this.listaEstudiantes = resp.data;
        this.enviarLista.emit(this.listaEstudiantes);
      },
      error:()=>{
        alert('Error en el servicio');
      }
        });
  }

}
