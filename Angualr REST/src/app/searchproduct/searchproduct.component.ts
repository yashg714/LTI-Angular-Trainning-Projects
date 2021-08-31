import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {

  srchCat:string="";
  lowPrice:number=0;
  highPrice:number=0;
  prod:any;

  constructor(private pService:ProductService) { }

  ngOnInit(): void {
  }
  searchByPrice()
  {
      this.pService.searchProductByPrice(this.lowPrice,this.highPrice).subscribe(
        (data)=>
        {
          console.log(data);
          this.prod=data;
        }
      )
  }
  searchByCat()
  {
    this.pService.searchProductByCategory(this.srchCat).subscribe(
      (data)=>
      {
        console.log(data);
        this.prod=data;
      }
    )
  }

}
