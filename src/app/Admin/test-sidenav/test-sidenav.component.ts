import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-sidenav',
  templateUrl: './test-sidenav.component.html',
  styleUrls: ['./test-sidenav.component.scss']
})
export class TestSidenavComponent implements OnInit {
  showFiller = false;
  listTest: any=[];
  constructor(
    public http: HttpClient
  ) { }
  readonly url='http://localhost:58948/api';

  ngOnInit(): void {
    this.testList();
  }
  testList(){
    this.http.get(this.url +'/ProductDetails')
      .toPromise()
      .then(res=>{
        this.listTest= res;
      })
  }

}
