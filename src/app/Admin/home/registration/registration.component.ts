import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShopServerService } from 'src/app/Services/shop-server.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public service: ShopServerService,
    public toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.user_formModel.reset();
  }
  onSubmit(){
    this.service.user_register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.user_formModel.reset();
          this.toast.success('Create new user success !')
        } else {
          res.errors.forEach((element:any) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toast.error('Username is already taken!','Registration fail !')
                break;
              default:
                this.toast.error('Registration fail')
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
