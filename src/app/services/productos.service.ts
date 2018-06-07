import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';


@Injectable()
export class ProductosService {

  public url: string;

  constructor(
    public _http: Http
  ) {
    this.url= GLOBAL.url;
   }


   /**
    * Retorna el listado de productos
    */
   getProductos(){
     return this._http.get(this.url+'productos')
     .map(res => res.json());
   }


   getProducto(id){
     return this._http.get(this.url+'productos/'+id)
                    .map(res => res.json());
   }

   /**
    * Añade un nuevo producto
    * @param producto 
    */
   addProducto(producto: Producto){
     let json= JSON.stringify(producto);
     let params = 'json='+json;
     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

     return this._http.post(this.url+'productos',params,{headers: headers})
                        .map(res=> res.json());
   }


   /**
    * subir imagenes
    * @param url 
    * @param params 
    * @param files 
    */
   makeFileRequest(url: string, params: Array<string>, files: Array<File>){
     return new Promise((resolve, reject)=> {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();

        for (let i = 0; i < files.length; i++) {
          formData.append('uploads[]',files[i],files[i].name) ;
        
        }

        xhr.onreadystatechange= function(){
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              resolve(JSON.parse(xhr.response));
            }
            else{
              reject(xhr.response);
            }
          }
        };

        xhr.open("POST",url,true);
        xhr.send(formData);

     });
   }
}
