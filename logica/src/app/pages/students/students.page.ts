import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentButtonComponent } from 'src/app/shared/student-button/student-button.component';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, StudentButtonComponent]
})
export class StudentsPage implements OnInit {
  listaE:Array<Student>=[];
  constructor() { }

  ngOnInit() {
  }

  recibirLista(lista:Array<Student>):void{
    this.listaE = lista;
  }

}
