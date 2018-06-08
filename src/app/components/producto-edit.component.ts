import { Component } from '@angular/core';
import {Route , Router,ActivatedRoute, Params} from '@angular/router';

import { ProductosService } from "../services/productos.service";
import { Producto } from "../models/producto";
import { GLOBAL } from '../services/global';

@Component({
   selector: 'producto-edit',
   templateUrl: '../views/producto-add.html',
   providers: [ProductosService]

})

export class ProductoEditComponent{

    public titulo: string;
    public producto: Producto;

    public filesToUpload=new Array<any>();
    public resultUpload; 
    public is_edit;


    constructor(
        private _productoService: ProductosService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo="Editar Producto";
        this.producto=new Producto(1,'','',1,'');
        this.is_edit=true;
    }
  

    ngOnInit(){

        
        this.getProducto();
    }


    getProducto(){
        this._route.params.forEach((params: Params) =>{
            let id= params['id'];//captura el parametro de la Url

            this._productoService.getProducto(id).subscribe(
                response => {

                    if(response.code==200){

                        this.producto = response.data;
                        console.log(this.producto);

                    }else{
                        this._router.navigate(['/producto']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }



    onSubmit() {
        console.log(this.producto);

        //si existe un archivo para cargar 
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
                console.log(result);

                this.resultUpload = result;//captura la respueta              
                this.producto.imagen = this.resultUpload.filename;//llena la propiedad imagen con la de la respuesta para poder asociar el nombre del documeto
                
                this.editProducto();
            },
                (error) => {
                    console.log(error)
                }
            );
        } else {//si no tiene archivos para guardar solo guarda el resto de las propiedades del producto
            this.editProducto();
        }
    }

    /**
     * Guarda un producto
     */
    editProducto(){
        this._route.params.forEach((params: Params) =>{
            let id= params['id'];//captura el parametro de la Url        
        this._productoService.editProducto(id, this.producto).subscribe(
            response=>{
                 if(response.code == 200){                     
                     this._router.navigate(['/producto',id]);
                 }
                 else{
                     console.log(response);
                 }
            },
            error =>{
               console.log(<any>error); 
            }
        );
    });

    }

/**
     * añade el archivo al array de filesToUpload
     * @param fileInput 
     */
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(this.filesToUpload);
    }


}