import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

export class Lunch{
  message?:string;
}


@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})

export class LunchComponent implements OnInit{
  lunch:Lunch = {
    message: "Du skal skrive en besked makker"
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){}

  setMessage(): void {
    this.route.params.subscribe((params: ParamMap) => {
      this.lunch.message = atob(params['message']);
    })
  }

  ngOnInit(): void{
    this.setMessage();
  }
}

