import { ClassField } from "@angular/compiler";
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({

    selector:"pform",
    templateUrl:"./pform.component.html",
    styleUrls:["./pform.component.css"]
})
export class PformComponent
{
    pid:number;
    pname:string;
    price:number;
    constructor(private pservice:ProductService)
    {

    }
    @Output() myevent=new EventEmitter();
    @Input("upprod") prod:Product;
    ngOnChanges(change:SimpleChanges)
    {
        if(change["prod"].currentValue!=change["prod"].previousValue)
        {
            this.pid=this.prod.pid;
            this.pname=this.prod.pname;
            this.price=this.prod.price;
        }
    }
    Addproduct()
    {
        let p=new Product(this.pid,this.pname,this.price);
        
        console.log(p);
        this.pservice.AddProduct(p);
        this.pid=0;
        this.pname="";
        this.price=0;
        this.myevent.emit(false);

    }
    updateProduct()
    {
        let p=new Product(this.pid,this.pname,this.price);
        
        console.log(p);
        this.pservice.updateProduct(p);
        this.pid=0;
        this.pname="";
        this.price=0;
        this.myevent.emit(false);
    }
}