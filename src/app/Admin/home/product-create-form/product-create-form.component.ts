import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProductDetail } from 'src/app/Models/products-detail.model';
import { ImageFirebaseCommonService } from 'src/app/Services/image-firebase-common.service';
import { ShopServerService } from 'src/app/Services/shop-server.service';

@Component({
  selector: 'app-product-create-form',
  templateUrl: './product-create-form.component.html',
  styleUrls: ['./product-create-form.component.scss']
})
@ViewChild('textbox')  //access this variable <textarea>
export class ProductCreateFormComponent implements OnInit {

  imageLink: string ='';
  constructor(
    public service: ShopServerService,
    public dialog: MatDialog,
    public toastr: ToastrService,
    public imageLinkCommon: ImageFirebaseCommonService
  ) { 
    imageLinkCommon.imageLinkShareParent.subscribe((res)=>{
      console.log(res)
      this.imageLink = res;
    })
  }

  ngOnInit(): void {
  }
  insertRecord(form: NgForm){
    this.service.create_product_detail().subscribe(res=>{
      this.service.getList_product();
      this.resetForm(form);
      console.log(res);
    });
  }
  updateRecord(form: NgForm){
    this.service.update_product_detail().subscribe(res=>{
      this.service.getList_product();
      this.resetForm(form);
      console.log(res);
    });
  }
  onSubmit(form : NgForm){
    if(this.service.formData_Product.id==0){
      this.insertRecord(form);
      this.resetForm(form);
      this.close();
      this.toastr.success('Create new product detail success','Success !')
    }else{
      this.updateRecord(form);
      this.toastr.success('Update new product detail success','Success !')
      this.close();
    }
  }
  //reset form
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData_Product= new ProductDetail;
  }
  //close form
  close(){
    this.dialog.closeAll();
  }
}
