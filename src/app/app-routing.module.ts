import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateComponent } from './update/update.component';
//import { UpdateComponent } from './update/update.component';



const routes: Routes = [{path:'',component:ProductListComponent},
{path:'add',component:NewProductComponent},
{path:'update/:id',component:UpdateComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
