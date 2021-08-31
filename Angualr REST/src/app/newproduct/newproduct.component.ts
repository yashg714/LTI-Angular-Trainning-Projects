import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  prod:Product;

  constructor(private prodservice:ProductService) {
      this.prod=new Product();
   }

  ngOnInit(): void 
  {
  }
  saveData()
  {

      this.prodservice.addNewProduct(this.prod).subscribe(
        (data)=>{
          console.log("Return Value from REST"+data); 
        }
      )
    
  }
}
