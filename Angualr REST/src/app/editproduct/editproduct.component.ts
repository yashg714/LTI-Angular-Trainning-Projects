import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private pservice:ProductService) 
  {
      this.prod=new Product();
   }

  prodid:any;
  prod:Product;

  ngOnInit(): void
   {
      this.prodid=localStorage.getItem("prodid");
      this.pservice.serachProductById(this.prodid).subscribe(
        (data)=>{
          this.prod=data as Product;
        }
      )
   }

   saveData()
   {
     this.pservice.updateProduct(this.prod).subscribe
     (
       (data)=>{ console.log(' Data Updated')}
     )
   }

}
