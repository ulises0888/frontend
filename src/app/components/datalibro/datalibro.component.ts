import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datalibro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datalibro.component.html',
  styleUrl: './datalibro.component.css'
})
export class DatalibroComponent implements OnInit{
  libro: any[] = []; // Lista de usuarios

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    //this.obtenerUsuarios(); // Cargar usuarios al iniciar el componente
  }

  obtenerUsuarios() {
    this.usuarioService.fetchLibro().subscribe(
      (res: any[]) => {
        this.libro = res;
      },
      (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    );
  }
}
