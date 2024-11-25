import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newautor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newautor.component.html',
  styleUrl: './newautor.component.css'
})

export class NewautorComponent {
  newautor: any = {}; // Objeto para el nuevo usuario

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  /*crearAutor() {
    /*console.log('Creando nuevo usuario:', this.newautor);
    this.usuarioService.postAutor(this.newautor).subscribe(
      (res) => {
        console.log('Usuario creado:', res);
        this.newautor = { id_autor: '' }; // Reinicia el formulario
        this.router.navigate(['/autor']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al crear el usuario:', err);
      }
    );
  }*/

}