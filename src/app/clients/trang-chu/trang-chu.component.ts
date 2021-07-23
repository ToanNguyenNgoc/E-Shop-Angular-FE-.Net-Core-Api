import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetail } from 'src/app/Models/products-detail.model';
import { ShopServerService } from 'src/app/Services/shop-server.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {
  public page=1;
  public pageSize=10;
  user_profiles: any;
  public Products:ProductDetail []=[];
  constructor(
    public service: ShopServerService,
    public dialog: MatDialog,
    public route: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.service.getList_product();
    this.getProductBySearching();
    this.service.get_user_profile().subscribe((res)=>{
      this.user_profiles= res;
    })

  }
  getProductBySearching(){
   this.activatedRoute.params.subscribe(params=>{
     if(params.searchTerm){
      this.service.getAllProduct().subscribe(res=>{
        this.Products = res.filter((data: ProductDetail)=>
          data.productName.toLowerCase().includes(params.searchTerm.toLowerCase()))
      })
     }else{
       this.service.getAllProduct().subscribe((res)=>{
         this.Products = res;
       })
     }
   })
  }
  sortProductByPrice(dir: string){
    if(dir=='up'){
      this.Products = _.orderBy(this.Products, ['discount'],['asc'])
    }else{
      this.Products = _.orderBy(this.Products, ['discount'],['desc']);
    }
  }
  
}
