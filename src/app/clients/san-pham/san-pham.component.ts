import { Component, Input, OnInit } from '@angular/core';
import { ProductDetail } from 'src/app/Models/products-detail.model';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.scss']
})
export class SanPhamComponent implements OnInit {

  @Input()
  productItem!: ProductDetail;
  constructor() { }

  ngOnInit(): void {
  }

}
