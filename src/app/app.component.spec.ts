import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Inicializa el formulario con campos y validaciones
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://tu-servidor.com/procesar-datos', this.formulario.value)
        .subscribe(response => {
          console.log('Respuesta del servidor:', response);
        }, error => {
          console.error('Error al enviar el formulario:', error);
        });
    }
  }
}
