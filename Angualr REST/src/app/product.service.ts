import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) 
  { }

  baseUrl:string="http://localhost:9887//productRest/api";

  //RETRIEVING ALL PRODUCTS
  getAllProducts()
  {
    return this.httpClient.get(this.baseUrl+"/products");
  }

  //ADDING PRODUCT
  addNewProduct(product:Product)
  {
    return this.httpClient.post(this.baseUrl+"/products",product);
  }

  serachProductById(productid:number)
  {
    return this.httpClient.get(this.baseUrl+"/products/"+productid);
  }
  updateProduct(product:Product)
  {
    return this.httpClient.put(this.baseUrl+"/products",product);
  }
  deleteProduct(product:any)
  {
    return this.httpClient.delete(this.baseUrl+"/products/"+product);
  }
  searchProductByCategory(category:string)
  {
    return this.httpClient.get(this.baseUrl+"/productsbycat/"+category);
  }
  searchProductByPrice(lower:number,upper:number)
  {
    return this.httpClient.get(this.baseUrl+"/productsbyprice/"+lower+"/"+upper);
  }
}
