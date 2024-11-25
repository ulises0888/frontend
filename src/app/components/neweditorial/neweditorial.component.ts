import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-neweditorial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './neweditorial.component.html',
  styleUrl: './neweditorial.component.css'
})
export class NeweditorialComponent {
  neweditorial: any = {}; // Objeto para el nuevo usuario

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  /*crearEditorial() {
    console.log('Creando nuevo usuario:', this.neweditorial);
    this.usuarioService.postEditorial(this.neweditorial).subscribe(
      (res) => {
        console.log('Usuario creado:', res);
        this.neweditorial = { id_editorial: '' }; // Reinicia el formulario
        this.router.navigate(['/editorial']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al crear el usuario:', err);
      }
    );
  }*/
}
