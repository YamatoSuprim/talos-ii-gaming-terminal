import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Registro } from './pages/registro/registro';
import { About } from './pages/about/about';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'registro', component: Registro },
    { path: 'about', component: About }
];