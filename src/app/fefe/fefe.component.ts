import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';



export class Fefe{
  message: string;
}

@Component({
  selector: 'app-fefe',
  templateUrl: './fefe.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  styleUrls: ['./fefe.component.css']
})
export class FefeComponent implements OnInit{

  fefe:Fefe = {
    message: "Du skal skrive en besked makker"
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){}

  setMessage(): void {
    this.route.params.subscribe((params: ParamMap) => {
      this.fefe.message = atob(params['message']);
    })
  }

  ngOnInit(): void{
    this.setMessage();
  }


}
