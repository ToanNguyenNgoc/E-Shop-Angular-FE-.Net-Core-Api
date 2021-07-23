import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetail } from 'src/app/Models/products-detail.model';
import { ShopServerService } from 'src/app/Services/shop-server.service';
//import { threadId } from 'worker_threads';
import { ProductCreateFormComponent } from '../product-create-form/product-create-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public page=1;
  public pageSize=5;

  listProductDetails:ProductDetail[]=[];

  constructor(
    public service: ShopServerService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.getList_product();
    }
  //filter
  // public orderBy(key: any, dir: any){
  //   this.listProductDetails= _.orderBy()
  // }
  //from product
  openProductForm(){
    const dialogRef = this.dialog.open(ProductCreateFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //update
  update_form_product(selectRecord: ProductDetail){
    this.dialog.open(ProductCreateFormComponent);
    this.service.formData_Product= Object.assign({}, selectRecord);
  }
  //Delete
  onDelete(id: number){
    this.service.delete_product_detail(id).subscribe(res=>{
      this.service.getList_product();
    })
  }
  delete(id: number){
    if (confirm('Bạn có muốn xóa mặt hàng không ?')) {
      this.onDelete(id);
    } else {
    }
  }

}
