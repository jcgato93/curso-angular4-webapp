import {ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';

const appRoutes: Routes =[
 {path: '', component: HomeComponent},//vacia 
 {path: 'home', component: HomeComponent},
 {path: 'productos', component: ProductosListComponent},
 {path: '**', component: ErrorComponent}//url no existente
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);