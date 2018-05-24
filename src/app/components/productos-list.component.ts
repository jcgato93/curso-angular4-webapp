import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//services
import { ProductosService } from '../services/productos.service';


//models
import { Producto } from '../models/producto';

@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
    providers : [ProductosService]

})

export class ProductosListComponent{

    public titulo: string;
    public productos: Producto[];   

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductosService
    ){
        this.titulo= 'Listado de productos';
    }


    ngOnInit(){
        console.log('productos-list.component.ts cargado');
        
        this._productoService.getProductos().subscribe(
            result =>{               
                if(result.code != 200){
                    console.log(result);
                }else{
                    this.productos=result.data;//obtiene la data del response
                }

            },
            error =>{
                console.log(<any>error);
            }
        );
    }

}