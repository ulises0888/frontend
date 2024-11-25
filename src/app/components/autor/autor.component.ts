import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent implements OnInit {
  autor: any[] = []; // Lista de usuarios

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    //this.obtenerUsuarios(); // Cargar usuarios al iniciar el componente
  }

  obtenerUsuarios() {
    this.usuarioService.fetchAutor().subscribe(
      (res: any[]) => {
        this.autor = res;
      },
      (err) => {
        console.error('Error al obtener Autor:', err);
      }
    );
  }
}
