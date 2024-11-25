import { Routes } from '@angular/router';
//import {UsersComponent} from './components/users/users.component' ;
import { UsersComponent } from './components/users/users.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { LibroComponent } from './components/libro/libro.component';
import {DatalibroComponent} from './components/datalibro/datalibro.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { AutorComponent } from './components/autor/autor.component';
import { GeneroComponent } from './components/genero/genero.component';
import { NewgeneroComponent } from './components/newgenero/newgenero.component';
import { NewautorComponent } from './components/newautor/newautor.component';
import { NeweditorialComponent } from './components/neweditorial/neweditorial.component';

export const routes: Routes = [
    { path: 'usuario', component: UsersComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: 'registros', component: RegistrosComponent },
    { path: 'nuevousuario', component: NuevousuarioComponent },
    { path: 'editarusuario', component: EditarUsuarioComponent },
    { path: 'editar-usuario/:id_usuario', component: EditarUsuarioComponent }, // Ruta con parámetro
    //libro
    {path:'libro', component:LibroComponent},
    { path: 'datalibro', component: DatalibroComponent },
    //editorial
    { path: 'editorial', component: EditorialComponent },
    { path: 'neweditorial', component: NeweditorialComponent },
    //autor
    { path: 'autor', component: AutorComponent },
    { path: 'newautor', component: NewautorComponent },
    //genero
    { path: 'genero', component: GeneroComponent },
    { path: 'newgenero', component: NewgeneroComponent },
    //{ path: '', redirectTo: '/registros', pathMatch: 'full' }


];

