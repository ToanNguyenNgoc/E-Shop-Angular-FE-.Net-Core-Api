import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartCommonService } from 'src/app/Services/cart-common.service';
import { ShopServerService } from 'src/app/Services/shop-server.service';
import { TaiKhoanNguoiDungComponent } from '../tai-khoan-nguoi-dung/tai-khoan-nguoi-dung.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user_profiles: any;
  cartList: any=[];
  constructor(
    public service: ShopServerService,
    public dialog: MatDialog,
    public route: Router,
    public cartCommon: CartCommonService
  ) { 
    this.cartCommon.cartSubject.subscribe((data)=>{
      this.cartItem= data;
    })
  }

  ngOnInit(): void {
    this.loadCartBox();
    this.cartItemCount();
    this.getCartList();
    this.service.get_user_profile().subscribe((res)=>{
      this.user_profiles= res;
    });
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
  //get cart list boox
  getCartList(){
    if(localStorage.getItem('localCart')){
      this.cartList = JSON.parse(`${localStorage.getItem('localCart')}`);
      // console.log(this.cartList);
    }
  }
  //load cart box
  loadCartBox(){
    if(localStorage.getItem('localCart')){
      this.cartList= JSON.parse(`${localStorage.getItem('localCart')}`);
    }
  }
  loginUserForm(){
    this.dialog.open(TaiKhoanNguoiDungComponent)
  }
  logoutUser(){
    localStorage.removeItem('token');
    window.location.reload();
  }

}
