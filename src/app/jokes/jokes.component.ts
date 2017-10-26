import { Component, OnInit } from '@angular/core';

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

  jokes:Joke[] = [
    {
    title: "Best joke ever",
    createdBy: "MMB",
    joke: "Hahahaha",
    punchline: "Endu mere haha",
    votesUp: 0,
    votesDown: 100
  },
  {
    title: "Best joke ever",
    createdBy: "MMB",
    joke: "Den her er også sjov",
    punchline: "Lalallalalalala",
    votesUp: 0,
    votesDown: 100
  }
]



  constructor() { }

  ngOnInit() {
  }

}
