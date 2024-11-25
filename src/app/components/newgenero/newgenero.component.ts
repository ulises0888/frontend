import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newgenero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newgenero.component.html',
  styleUrl: './newgenero.component.css'
})
export class NewgeneroComponent {
  newgenero: any = {}; // Objeto para el nuevo usuario

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  /*crearGenero() {
    console.log('Creando nuevo usuario:', this.newgenero);
    this.usuarioService.postGenero(this.newgenero).subscribe(
      (res) => {
        console.log('Usuario creado:', res);
        this.newgenero = { id_genero: '' }; // Reinicia el formulario
        this.router.navigate(['/genero']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al crear el usuario:', err);
      }
    );
  }*/

}