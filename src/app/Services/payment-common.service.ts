import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentCommonService {

  constructor() { }
  totalPrice = new Subject<any>();
  totalQuantity = new Subject<any>();
}
