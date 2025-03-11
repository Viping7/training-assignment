import { Component, signal } from '@angular/core';
import { Category, Joke } from '../../models/joke.type';
import { SelectJokeParamsComponent } from '../select-joke-params/select-joke-params.component';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-joke',
  imports: [SelectJokeParamsComponent],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})


export class JokeComponent {
  joke = signal<Joke | null>(null);
  jokeTypes:Category[] = ["Pun" , "Programming"];

  constructor(private jokeService: JokesService){
  }

  showJoke(jokeType:Category){
    this.joke.update(()=>this.jokeService.jokes[jokeType])
  }
}
