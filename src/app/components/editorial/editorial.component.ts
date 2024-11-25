import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editorial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editorial.component.html',
  styleUrl: './editorial.component.css'
})
export class EditorialComponent implements OnInit {
  editorial: any[] = []; // Lista de usuarios

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    //this.obtenerUsuarios(); // Cargar usuarios al iniciar el componente
  }

  obtenerUsuarios() {
    this.usuarioService.fetchEditorial().subscribe(
      (res: any[]) => {
        this.editorial = res;
      },
      (err) => {
        console.error('Error al obtener Editorial:', err);
      }
    );
  }
}
