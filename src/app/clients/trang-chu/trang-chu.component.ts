import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShopServerService } from 'src/app/Services/shop-server.service';
import { TaiKhoanNguoiDungComponent } from '../tai-khoan-nguoi-dung/tai-khoan-nguoi-dung.component';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {
  public page=1;
  public pageSize=10;
  user_profiles: any;
  constructor(
    public service: ShopServerService,
    public dialog: MatDialog,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.service.getList_product();
    this.service.get_user_profile().subscribe((res)=>{
      this.user_profiles= res;
    })

  }
  loginUserForm(){
    this.dialog.open(TaiKhoanNguoiDungComponent)
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('');
  }

}
