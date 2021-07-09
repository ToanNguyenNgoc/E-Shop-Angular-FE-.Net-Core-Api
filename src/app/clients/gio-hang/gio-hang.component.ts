import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartCommonService } from 'src/app/Services/cart-common.service';
import { PaymentCommonService } from 'src/app/Services/payment-common.service';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.scss']
})
export class GioHangComponent implements OnInit {

  cartList: any=[];
  totalPrice: number=0;
  tottalProduct:number=0;

  constructor(
    public cartCommon: CartCommonService,
    public route: Router,
    //public productPaymentCommon: PaymentCommonService
    public dataPayment: PaymentCommonService
  ) { }

  ngOnInit(): void {
    this.getCartList();
    this.loadCart();
    this.pushPaymentDetail();
  }
  //get list product in cart
  getCartList(){
    if(localStorage.getItem('localCart')){
      this.cartList= JSON.parse(`${localStorage.getItem('localCart')}`);
      console.log(this.cartList);
    }
  }
  //load cart
  loadCart(){
    if(localStorage.getItem('localCart')){
      this.cartList= JSON.parse(`${localStorage.getItem('localCart')}`);
      var totaItem= JSON.parse(`${localStorage.getItem('localCart')}`);
      this.tottalProduct= totaItem.length;
      this.totalPrice= this.cartList.reduce( function(acc: any, val:any){
        return acc += (val.quantity * val.discount)
      },0)
    }
  }
  //handler quantity
  incr(id: any, quantity: any){
    for(let i=0; i< this.cartList.length; i++){
      if(this.cartList[i].id === id){
        this.cartList[i].quantity = parseInt(quantity) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.cartList));
    this.loadCart();
  }
  decr(id: any, quantity: any){
    for(let i=0; i< this.cartList.length; i++){
      if(this.cartList[i].id === id){
       if(quantity > 1){
        this.cartList[i].quantity = parseInt(quantity) - 1;
       }
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.cartList));
    this.loadCart();
  }
  //delete one product
  deleteItem(id: any){
    // console.log(id)
    if(localStorage.getItem('localCart')){
      this.cartList= JSON.parse(`${localStorage.getItem('localCart')}`);
      for(let i=0; i< this.cartList.length; i++){
        if(this.cartList[i].id=== id){
          this.cartList.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.cartList));
          this.loadCart();
          this.cartItemCount();
        }
      }
    }
  }
  //cart count item
  cartItem: number=0;
  cartItemCount(){
    if(localStorage.getItem('localCart') != null){
      var cartCount= JSON.parse(`${localStorage.getItem('localCart')}`);
     this.cartItem= cartCount.length;
     this.cartCommon.cartSubject.next(this.cartItem);
    }
  }
  //Pay now
  payNow(){
    console.log(this.totalPrice);
    console.log(this.tottalProduct);
    this.route.navigateByUrl('/payment');
  }
  pushPaymentDetail(){
    this.dataPayment.totalPrice.next(this.totalPrice);
    this.dataPayment.totalQuantity.next(this.tottalProduct);
  }
  

}
