import {ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';

const appRoutes: Routes =[
 {path: '', component: HomeComponent},//vacia
 {path: '**', component: ErrorComponent},//url no existente
 {path: 'home', component: HomeComponent}
 
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);