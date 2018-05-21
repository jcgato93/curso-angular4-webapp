import {ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home.component';

const appRoutes: Routes =[
 {path: '', component: HomeComponent},//vacia
 {path: '**', component: HomeComponent},//url no existente
 {path: 'home', component: HomeComponent}
 
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);