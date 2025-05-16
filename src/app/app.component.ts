import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaCursosComponent } from "./components/tabla-cursos/tabla-cursos.component";
import { TablaAlumnosComponent } from "./components/tabla-alumnos/tabla-alumnos.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TablaCursosComponent, TablaAlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 cursos:boolean = true;
 
 handleCambio(){ //Metodo de clase
    this.cursos = !this.cursos;
    // alert('Hola Angular');
  }
}
