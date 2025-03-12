import { Pipe, PipeTransform } from '@angular/core';
import { CreatedBy, Joke } from '../models/joke.type';

@Pipe({
  name: 'filterJokes'
})
export class FilterJokesPipe implements PipeTransform {

  transform(value: Joke[], isCustom:CreatedBy): Joke[] {
    return value.filter(j=>{
      if(isCustom == "all"){
        return j;
      }
      if(isCustom ==="api"){
        return !j.flags.userCreated
      }
      return j.flags.userCreated
    });
  }

}
