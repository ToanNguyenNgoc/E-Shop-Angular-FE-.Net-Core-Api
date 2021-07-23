import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { ShopServerService } from 'src/app/Services/shop-server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user_profiles: any;
  constructor(
    public service: ShopServerService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.service.get_user_profile().subscribe(
      res=>{
          this.user_profiles= res
      },
      err=>{
        console.log(err)
      }
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/admin-login'])
  }
  
}
