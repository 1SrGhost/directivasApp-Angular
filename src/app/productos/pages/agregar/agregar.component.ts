import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  texto1: string = 'este Campo es obligatorio';
  color: string = 'red';
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  /**
   * Devuelve verdadero si el campo no es válido, o falso si es válido
   * @param {string} campo - El nombre del campo de formulario.
   * @returns El valor de la propiedad miFormulario.get(campo)?.invalid o false.
   */
  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }
  cambiarColor(): void {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }
}
