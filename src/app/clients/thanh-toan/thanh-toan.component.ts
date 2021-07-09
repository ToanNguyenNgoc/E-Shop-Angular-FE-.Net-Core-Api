import { Component, OnInit } from '@angular/core';
import { PaymentCommonService } from 'src/app/Services/payment-common.service';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.scss']
})
export class ThanhToanComponent implements OnInit {

  displayPrice: number=0;
  displayQuantity: number = 0;
  lisProduct: any=[];
  constructor(
    public dataPayment: PaymentCommonService,
  ) { }

  ngOnInit(): void {
    this.getListProduct();
  }
  getListProduct(){
    if(localStorage.getItem('localCart') != null){
      this.lisProduct  = JSON.parse(`${localStorage.getItem('localCart')}`);
      this.displayQuantity = this.lisProduct.length;
      this.displayPrice = this.lisProduct.reduce(function(acc: any, val: any){
        return acc += (val.quantity * val.discount)
      }, 0)
    }
  }
  
}
