import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import { ProductModel } from '../product-list/product.model';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-updateproduct',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:''
  name:''
  code:''
  date:''
  desc:''
  price:''
  rating:''
  image:''
data:''
  title:String="Update Product";
  
 
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }
   
  


  updateSubmit(form:NgForm){
    alert("Do you want to update?");
    //var data=this.ngOnInit()
    //let products=JSON.parse(JSON.stringify(data));
    this.productService.updateproduct(form.value);
    console.log(form.value);
    console.log("updated" );
    this.router.navigate(['/']);
    //console.log("after navigate")
   // this.ngOnInit();
    //console.log("afterngOnInit")
  }




    ngOnInit() {


    this.route.queryParams
    .subscribe((params) => {
      this.id=params.id;
      this.name=params.name;
      this.code=params.code;
      this.date=params.date;
      this.desc=params.desc;
      this.price=params.price;
      this.rating=params.rating;
      this.image=params.image;
      
    })
  }



  
  }




  
  