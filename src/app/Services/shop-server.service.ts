import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetail } from '../Models/products-detail.model';
import { ConfirmedValidator } from './confirmed.validator';

@Injectable({
  providedIn: 'root'
})
export class ShopServerService {

  constructor(
    private http: HttpClient,
    private user_formBuilder: FormBuilder,
    public route: Router
  ) { }
  readonly rootURL='http://localhost:58948/api';
  list_product: ProductDetail[]=[];
  public formData_Product: ProductDetail= new ProductDetail();
  
  //get list product
  getList_product(){
    this.http.get(this.rootURL+'/ProductDetails')
      .toPromise()
      .then(res=>{
        this.list_product= res as ProductDetail[]
      })
      .catch((err)=>{
        console.log('server not found');
        this.route.navigateByUrl('/not-found');
      });
  }
  //get on product detial
  get_product_detail(id: number){
    return this.http.get(`${this.rootURL}/ProductDetails/` + id);
  }
  //Create new Product
  create_product_detail(){
    return this.http.post(this.rootURL +'/ProductDetails', this.formData_Product);
  }
  //Update product 
  update_product_detail(){
    return this.http.put(`${this.rootURL}/ProductDetails/${this.formData_Product.id}`,this.formData_Product)
  }
  //Delete Product
  delete_product_detail(id: number){
    return this.http.delete(`${this.rootURL}/ProductDetails/${id}`);
  }
  // --------------------------------User---------------------------------
  user_formModel= this.user_formBuilder.group({
    UserName:['',[Validators.required]],
    Email:['',[Validators.required]],
    FullName:['',[Validators.required]],
    Password:['',[Validators.required]],
    Confirm_Password:['',[Validators.required]]
    
  },{validator: ConfirmedValidator('Password','Confirm_Password')})
  //---------------------
  user_register(){
    var body={
      UserName: this.user_formModel.value.UserName,
      Email: this.user_formModel.value.Email,
      FullName: this.user_formModel.value.FullName,
      Password: this.user_formModel.value.Password
    };
    return this.http.post(this.rootURL +'/ApplicationUser/Register', body);
  }
  user_login(login_formData: any){
    return this.http.post(this.rootURL +'/ApplicationUser/Login', login_formData);
  }
  get_user_profile(){
    const tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.rootURL + '/UserProfile',{headers: tokenHeader});
  }
}
