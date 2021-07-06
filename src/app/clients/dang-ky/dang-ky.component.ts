import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShopServerService } from 'src/app/Services/shop-server.service';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(
    public service: ShopServerService,
    public toastr: ToastrService,
    public route: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.user_register().subscribe((res: any)=>{
      if(res.succeeded){
        this.service.user_formModel.reset();
        this.toastr.success('Tạo mới thành công !');
        this.route.navigateByUrl('/dang-nhap');
      }else{
        res.errors.forEach((err:any)=>{
          switch(err.code){
            case 'DuplicateUserName':
              this.toastr.warning('Đăng ký thất bại !','Tài khoản đã tồn tại');
              break;
            default:
              this.toastr.error('Đăng ký thất bại');
              break;
          }
        })
      }
    }, err => console.log(err))
  }
}
