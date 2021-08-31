import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

const routes: Routes = [
  {path:'showproducts',component:ShowproductComponent},
  {path:'addproduct',component:NewproductComponent},
  {path:'updateproduct',component:EditproductComponent},
  {path:'search',component:SearchproductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
