import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';

export class Link{
  url?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Link: Link = {
    
  };

  setFefe(message: string, html: any): void{
    let baseMessage: string = btoa(message);
    this.Link.url = `http://covfefetime.dk/#/fefe/${baseMessage}`;

  }

  setLunch(message: string): void{
    let baseMessage: string = btoa(message);
    this.Link.url = `http://covfefetime.dk/#/lunch/${baseMessage}`;
  }

  setRiften(message: string): void{
    let baseMessage: string = btoa(message);
    this.Link.url = `http://covfefetime.dk/#/riften/${baseMessage}`;
  }

}
