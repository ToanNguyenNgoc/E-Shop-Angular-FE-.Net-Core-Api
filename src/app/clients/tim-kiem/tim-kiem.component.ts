import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tim-kiem',
  templateUrl: './tim-kiem.component.html',
  styleUrls: ['./tim-kiem.component.scss']
})
export class TimKiemComponent implements OnInit {
  searchTerm: string ='';
  constructor(
    public activatedRoute: ActivatedRoute,
    public route: Router,
  ) { }

  ngOnInit(
  ) {
    this.activatedRoute.params.subscribe(params=>{
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })
  }
  searchBtn(){
    this.route.navigateByUrl('/tim-kiem/' + this.searchTerm);
  }

}
