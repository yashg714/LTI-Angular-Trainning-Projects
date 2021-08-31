import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  prod:any;
 
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {

        this.productService.getAllProducts().subscribe((data:any)=>
        {
            console.log(data);
            this.prod=data;
            console.log(this.prod);
        })
  }

  editInfo(prodid:any)
  {
    localStorage.setItem("prodid",prodid);
    this.router.navigate(['updateproduct']);

  }
  deleteRow(prodid:any)
  {
    this.productService.deleteProduct(prodid).subscribe(
      (data)=> {console.log(data)}
    )
    this.router.navigate(['showproducts']);
   
  }
}
