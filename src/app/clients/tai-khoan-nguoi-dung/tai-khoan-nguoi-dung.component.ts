import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShopServerService } from 'src/app/Services/shop-server.service';

@Component({
  selector: 'app-tai-khoan-nguoi-dung',
  templateUrl: './tai-khoan-nguoi-dung.component.html',
  styleUrls: ['./tai-khoan-nguoi-dung.component.scss']
})
export class TaiKhoanNguoiDungComponent implements OnInit {
  login_formModel={
    UserName:'',
    Password:''
  }
  constructor(
    public service: ShopServerService,
    public toastr: ToastrService,
    public dialog: MatDialog,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.service.user_formModel.reset();
  }
  onLogin(form: NgForm){
    this.service.user_login(form.value).subscribe((res:any)=>{
      localStorage.setItem('token', res.token);
      this.toastr.success('Login Success !');
      this.closeDialog();
      this.route.navigateByUrl('/client/trang-chu')
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
  closeDialog(){
    this.dialog.closeAll();
  }
  onSubmit(){
    this.service.user_register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.user_formModel.reset();
          this.toastr.success('Create new user success !')
        } else {
          res.errors.forEach((element:any) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken!','Registration fail !')
                break;
              default:
                this.toastr.error('Registration fail')
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
