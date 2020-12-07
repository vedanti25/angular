import { Component, OnInit } from '@angular/core';
import { Product} from '../product.model'
import { ProductService } from '../product.service';

@Component({

    selector:"plist",
    templateUrl:"./plist.component.html",
    styleUrls:["./plist.component.css"]
})

export class PlistComponent implements OnInit
{
    parr:Product[];
   constructor(private pservice:ProductService)
   {
       console.log("plist const called");
   }
   ngOnInit()
   {
      console.log("ng init called in plist");
      this.parr=this.pservice.getAllProducts();
   }


}