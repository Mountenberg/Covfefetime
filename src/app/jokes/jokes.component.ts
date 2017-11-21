import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Joke{
  0?:any;
  1?:any;
  2?:any;
  3?:any;
  4?:any;
  5?:any;
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
    this._http.get("http://covfefetime.dk/php/phptest.php", {responseType: "text"}).subscribe(data =>{

    this.jokes = JSON.parse(data);
      console.log(data);
  });

}

showJokes(){
  document.getElementById("jokeform").classList.remove("hideform");
}

saveJoke(){
  alert("Venner, vent lidt - det virker ikke endnu!");
}
}
