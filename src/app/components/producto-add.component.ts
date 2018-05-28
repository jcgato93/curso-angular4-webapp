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
    public producto: Producto;

    constructor(){
        this.titulo= 'Crear un nuevo producto';
        this.producto= new Producto(0,'','',0,'');
    }

    ngOnInit(){
        console.log('producto-add.component.ts cargado...');
    }



    onSubmit(){
       console.log(this.producto);      
    }

}
