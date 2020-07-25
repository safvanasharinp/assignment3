import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    NewProductComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot([{path:'',component:ProductListComponent},
    // {path:'add',component:NewProductComponent},
    // {path:'update/:id',component:UpdateComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
