import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ProductService{
    constructor( private http:HttpClient){}
    getProducts(){
        return this.http.get("http://localhost:3000/products");
    }
    newProduct(item)
    {
        return this.http.post("http://localhost:3000/insert",{"product":item})
        .subscribe(data =>{console.log(data)})
    }
    removeProduct(deldata){
        return this.http.post("http://localhost:3000/remove",{"product":deldata})
        .subscribe((deldata)=>{console.log(deldata)})
      }
      updateproduct(data){
          return this.http.post("http://localhost:3000/update",{"product":data})
          .subscribe((data)=>{console.log(data)})
      }
    
    // gettoupdate(_id:String){
    //     return this.http.get<any>("http://localhost:3000/products"+ `/${_id}`)
    //   }
      
    //   updateproduct(id,item){
    //     return this.http.put<any>("http://localhost:3000/products/update" + `/${id}`,item).subscribe(res=>{
    //       console.log(res)
    //     },
    //     err=>{console.log(err)})
    //   }
     }