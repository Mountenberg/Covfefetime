import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

export class Riften{
  message?:string;
}

@Component({
  selector: 'app-riften',
  templateUrl: './riften.component.html',
  styleUrls: ['./riften.component.css']
})

export class RiftenComponent implements OnInit{
  
    riften:Riften = {
      message: "Du skal skrive en besked makker"
    }
  
    constructor(
      private route: ActivatedRoute,
      private location: Location
    ){}
  
    setMessage(): void {
      this.route.params.subscribe((params: ParamMap) => {
        this.riften.message = atob(params['message']);
      })
    }
  
    ngOnInit(): void{
      this.setMessage();
    }
  
  
  }
  