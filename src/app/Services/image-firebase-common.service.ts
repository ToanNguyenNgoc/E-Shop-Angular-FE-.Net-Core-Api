import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageFirebaseCommonService {

  constructor() { }
  imageLinkShareParent =new Subject<any>();
}
