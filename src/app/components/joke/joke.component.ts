import { Component, signal } from '@angular/core';
import { Category, CreatedBy, Flags, Joke } from '../../models/joke.type';
import { SelectJokeParamsComponent } from '../select-joke-params/select-joke-params.component';
import { JokesService } from '../../services/jokes.service';
import { MarkCustomJokeDirective } from '../../directives/mark-custom-joke.directive';
import { FormsModule } from '@angular/forms';
import { FilterJokesPipe } from '../../pipes/filter-jokes.pipe';
import { CommonModule, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-joke',
  imports: [SelectJokeParamsComponent, MarkCustomJokeDirective, FormsModule, FilterJokesPipe, CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})


export class JokeComponent {
  jokes = signal<Joke[] | []>([]);
  jokeTypes: Category[] = ["Pun", "Programming"];
  createdBy = signal<CreatedBy>("all");
  flaggedJokes:string[] =[];
  jokesWithUpdatedFlags:Joke[] =[];
  jokeSubscription:Subscription | undefined;
  newCategory:string|undefined;
  constructor(private jokeService: JokesService) {
  }

  ngOnInit(){
    this.flaggedJokes = this.jokeService.getFlaggedJokes();
  }

  ngDoCheck(){
    if(this.jokesWithUpdatedFlags.length > 0){
      const shouldChange = this.jokesWithUpdatedFlags.every((joke,i)=>{
        const updatedJokeFlagsKeys = Object.keys(joke.flags);
        const currentJokeFlagKeys = Object.keys(this.jokes()[i].flags);
        for (let key of updatedJokeFlagsKeys) {
          if (!currentJokeFlagKeys.includes(key)) {
            return false;
          }
          if(this.jokes()[i].flags[key as "nsfw"] !== joke.flags[key as "nsfw"]){
            return false
          }
          return true;
        }
        return false;
      })
      if(shouldChange){
        this.jokes.update(()=>this.jokesWithUpdatedFlags)
      }
    }
  }

  addCategories(){
    if(this.newCategory){
      this.jokeTypes = [...(this.jokeTypes as Category[]), this.newCategory as Category]
      this.newCategory = "";
    }
  }

  showJoke({ jokeType, all }: { jokeType: Category, all?: boolean }) {
    this.jokeSubscription = this.jokeService.getJokes(jokeType).subscribe((jokeRes) => {
      if (all) {
        this.jokes.update(() => jokeRes.jokes);
        return;
      }
      const random = Math.floor(Math.random() * (jokeRes.jokes.length - 0));
      this.jokes.update(() => [jokeRes.jokes[random]])
    })
  }

  checkIfJokeIsFlagged(){
    this.jokesWithUpdatedFlags = this.jokes().map(joke=>{
      return {
        ...joke,
        flags:{
          ...joke.flags,
          political:this.flaggedJokes.includes(joke.setup)
        }
      };
    })
  }

 
  ngOnDestroy(){
    this.jokeSubscription?.unsubscribe();
  }


}
