import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-detail',
    templateUrl: '../views/producto-detail.html',
    providers: [ProductosService]
})

export class ProductoDetailComponent{
 
    public producto: Producto;

    constructor(
        private _productoService: ProductosService,
        private _route: ActivatedRoute,
        private _router: Router
    ){

    }         
    
    ngOnInit(){
        console.log('producto-detail.Component.ts cargado ...');
    }

}