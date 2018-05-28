import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';


import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';


@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductosService]
})
export class ProductoAddComponent{
    public titulo: string;

    constructor(){
        this.titulo= 'Crear un nuevo producto';
    }

    ngOnInit(){
        console.log('producto-add.component.ts cargado...');
    }

}
