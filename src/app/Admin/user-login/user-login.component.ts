import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShopServerService } from 'src/app/Services/shop-server.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  login_formModel={
    UserName:'',
    Password:''
  }
  constructor(
    public service: ShopServerService,
    public route: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    
  }
  onSubmit(form: NgForm){
    this.service.user_login(form.value).subscribe((res:any)=>{
      localStorage.setItem('token', res.token);
      this.route.navigateByUrl('/admin');
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
