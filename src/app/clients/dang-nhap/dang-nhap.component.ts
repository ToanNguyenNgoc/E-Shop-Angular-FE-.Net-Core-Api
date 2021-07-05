import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShopServerService } from 'src/app/Services/shop-server.service';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  login_formModel={
    UserName:'',
    Password:''
  }
  
  constructor(
    public service: ShopServerService,
    public toastr: ToastrService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.service.user_formModel.reset();
  }
  onLogin(form : NgForm){
    this.service.user_login(form.value).subscribe((data: any)=>{
      localStorage.setItem('token', data.token);
      this.toastr.success('Login Success !');
      this.route.navigateByUrl('/client')
    },
    err =>{
      if(err.status==400){
        this.toastr.error('UserName or Password is incorrect','Login Fail !');
      }else{
        console.log(err);
      }
    }
    );
  }

}
