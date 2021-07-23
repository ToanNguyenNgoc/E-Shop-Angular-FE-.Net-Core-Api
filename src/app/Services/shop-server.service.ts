import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetail } from '../Models/products-detail.model';
import { ConfirmedValidator } from './confirmed.validator';
import { environment } from '../../environments/environment'
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopServerService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient,
    private user_formBuilder: FormBuilder,
    public route: Router
  ) { }
  readonly rootURL= environment.rootURL;
  list_product: ProductDetail[]=[];
  public formData_Product: ProductDetail= new ProductDetail();
  
  //get list product 
  getList_product(){
    this.http.get(this.rootURL+'/ProductDetails')
      .toPromise()
      .then(res=>{
        this.list_product= res as ProductDetail[]
      } )
  }
  //------------------------
  getAllProduct():Observable<any>{
    const url=`${this.rootURL}/ProductDetails`;
    return this.http
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  
  //get on product detail 
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
    let tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.rootURL + '/UserProfile',{headers: tokenHeader});
  }

  //---
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
