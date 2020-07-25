import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { Router } from "@angular/router";
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String="Product List";
//product is a model class for a product item
  products:ProductModel[];
//image properties
  imageWidth:number=50;
  imageMargin:number=2;

  showImage:boolean=false;
  //creates service object for calling getproducts()
  constructor(private productService: ProductService,private router:Router) {

   }
   toggleImage():void{
     this.showImage= !this.showImage;
   }
   deleteProduct(data){
    alert("Do you want to delete?");
    this.productService.removeProduct(data);
    console.log(`delete${data}`);
    //this.router.navigate(['/']);
    //console.log("after navigate")
    this.ngOnInit();
    //console.log("afterngOnInit")
  }
   editProduct(data){
  
     this.router.navigate(['/update',data]);
   }
 
  ngOnInit(): void {

    //calling get products() and loading the products to products array
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}
