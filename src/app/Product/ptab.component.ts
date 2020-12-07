import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({

    selector:"ptab",
    templateUrl:"./ptab.component.html",
    styleUrls:["./ptab.component.css"],

})
export class PtabComponent
{
    parr:Product[];
    pob:Product;
    constructor(private pservice:ProductService)
    {

    }
    ngOnInit()
    {
        this.parr=this.pservice.getAllProducts();
    }
    flag=false;
    DisplayForm()
    {
       this.flag=true;
    }
    updateProduct(p)
    {
        this.flag=true;
        this.pob=p;
    }
    deleteProduct(p)
    {
        this.pservice.deleteProduct(p);
    }
}