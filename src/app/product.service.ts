import { from } from 'rxjs';
import {Product} from './product.model';
import {Injectable} from '@angular/core';
@Injectable()
export class ProductService
{
    parr=[new Product(101,"chips",120),
    new Product(102,"Shoes",1200),
    new Product(120,"coca-cola",40),
    new Product(130,"bags",230)
   ];

   getAllProducts():Product[]
   {
       return this.parr;
   }
   AddProduct(p:Product)
   {
      this.parr.push(p);
   }
   updateProduct(p:Product)
   {
        for(let i=0;i<this.parr.length;i++)
        {
            if(this.parr[i].pid==p.pid)
            {
              this.parr[i].pname=p.pname;
              this.parr[i].price=p.price;
              break;
            }
        }
   }
   deleteProduct(p)
   {
    for(let i=0;i<this.parr.length;i++)
    {
        if(this.parr[i].pid==p.pid)
        {
          this.parr.splice(i,1);
          break;
        }
    }
   }
}