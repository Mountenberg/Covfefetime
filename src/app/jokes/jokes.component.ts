import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Joke{
  title: string;
  createdBy: string;
  joke: string;
  punchline?:string;
  votesUp: number;
  votesDown: number;
}



@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  

  jokes:Joke[];



  constructor(private _http: HttpClient) {}


  

  ngOnInit() {   
    this._http.get("http://covfefetime.dk/php/phptest.php", {responseType: "json"}).subscribe(data =>{
      this.jokes = data["results"];
  });

}
}
