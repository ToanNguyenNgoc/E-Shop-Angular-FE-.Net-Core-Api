import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCommonService {

  constructor() { }

  cartSubject= new Subject<any>();
}
