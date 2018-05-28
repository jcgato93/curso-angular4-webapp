import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';


import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';


@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductosService]
})
export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;

    constructor(
        private _productoService: ProductosService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo= 'Crear un nuevo producto';
        this.producto= new Producto(0,'','',0,'');
    }

    ngOnInit(){
        console.log('producto-add.component.ts cargado...');
    }



    onSubmit() {
        console.log(this.producto);

        //si existe un archivo para cargar 
        if (this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
                console.log(result);

                this.resultUpload = result;//captura la respueta              
                this.producto.imagen = this.resultUpload.filename;//llena la propiedad imagen con la de la respuesta para poder asociar el nombre del documeto
                
                this.saveProducto();
            },
                (error) => {
                    console.log(error)
                }
            );
        } else {//si no tiene archivos para guardar solo guarda el resto de las propiedades del producto
            this.saveProducto();
        }
    }

    /**
     * Guarda un producto
     */
    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(
            response=>{
                 if(response.code == 200){
                     this._router.navigate(['/productos']);
                 }
                 else{
                     console.log(response);
                 }
            },
            error =>{
               console.log(<any>error); 
            }
        );
    }



    public filesToUpload;
    public resultUpload; 
    /**
     * añade el archivo al array de filesToUpload
     * @param fileInput 
     */
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(this.filesToUpload);
    }
}
