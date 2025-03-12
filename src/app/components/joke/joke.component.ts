import { Component, signal } from '@angular/core';
import { Category, CreatedBy, Joke } from '../../models/joke.type';
import { SelectJokeParamsComponent } from '../select-joke-params/select-joke-params.component';
import { JokesService } from '../../services/jokes.service';
import { MarkCustomJokeDirective } from '../../directives/mark-custom-joke.directive';
import { FormsModule } from '@angular/forms';
import { FilterJokesPipe } from '../../pipes/filter-jokes.pipe';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-joke',
  imports: [SelectJokeParamsComponent,MarkCustomJokeDirective,FormsModule, FilterJokesPipe,CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})


export class JokeComponent {
  jokes = signal<Joke[] | []>([]);
  jokeTypes:Category[] = ["Pun" , "Programming"];
  createdBy = signal<CreatedBy>("all");
  constructor(private jokeService: JokesService){
  }

  showJoke({jokeType,all}:{jokeType:Category,all?:boolean}){
    if(all){
      this.jokes.update(()=>this.jokeService.jokes[jokeType]);
      return;
    }
    const random = Math.floor(Math.random() * (this.jokeService.jokes[jokeType].length - 0));
    this.jokes.update(()=>[this.jokeService.jokes[jokeType][random]])
  }
}
