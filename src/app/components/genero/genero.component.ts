import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-genero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.css'
})
export class GeneroComponent implements OnInit {
  genero: any[] = []; // Lista de usuarios

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    //this.obtenerUsuarios(); // Cargar usuarios al iniciar el componente
  }

  obtenerUsuarios() {
    this.usuarioService.fetchGenero().subscribe(
      (res: any[]) => {
        this.genero = res;
      },
      (err) => {
        console.error('Error al obtener un Genero:', err);
      }
    );
  }
}
