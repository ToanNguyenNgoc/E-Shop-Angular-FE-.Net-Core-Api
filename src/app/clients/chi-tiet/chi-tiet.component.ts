import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartCommonService } from 'src/app/Services/cart-common.service';
import { ShopServerService } from 'src/app/Services/shop-server.service';
import { AddCartSuccessComponent } from '../gio-hang/add-cart-success/add-cart-success.component';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss']
})
export class ChiTietComponent implements OnInit {
  id: number= this.route.snapshot.params['id'];
  data:any;
  public page=1;
  public pageSize=5;
  cartList:any=[];
  constructor(
    public service: ShopServerService,
    public route: ActivatedRoute,
    public cartCommon: CartCommonService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.get_one_product();
    this.service.getList_product();
  }
  get_one_product(){
    this.service.get_product_detail(this.id).subscribe(res=>{
      this.data= res;
      console.log(this.data);
    });
  }
  //handler add to cart
  itemsCart: any=[];
  addToCart(category: any){
    // console.log(category);
    let cartDataNull= localStorage.getItem('localCart');
    if(cartDataNull==null){
      let storeDataGet: any=[];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }else{
      var idItem= category.id;
      let index: number= -1;
      let cartData: string =`${localStorage.getItem('localCart')}`;
      this.itemsCart= JSON.parse(cartData);
      for(let i=0; i< this.itemsCart.lenght; i++){
        if(parseInt(idItem)===parseInt(this.itemsCart[i].id)){
          this.itemsCart[i].quantity= category.quantity;
          index=i;
          break;
        }
      }
      if(index==-1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }else{
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.dialog.open(AddCartSuccessComponent);
    this.cartNumberFunc();
    this.loadCartBox();
  }
  cartNumber: number=0;
  cartNumberFunc(){
    let stringData: string = `${localStorage.getItem('localCart')}`;
    var cartValue= JSON.parse(stringData);
    this.cartNumber= cartValue.length;
    this.cartCommon.cartSubject.next(this.cartNumber);
    
    // console.log(this.cartNumber);
  }
  //increase decrease quantity
  incr(data: any){
    data.quantity += 1;
  }
  decr(data: any){
    if(data.quantity > 1){
      data.quantity -= 1;
    }
  }
  loadCartBox(){
    if(localStorage.getItem('localCart')){
      this.cartList= JSON.parse(`${localStorage.getItem('localCart')}`);
    }
  }
}
