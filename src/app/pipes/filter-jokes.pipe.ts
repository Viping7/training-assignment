import { Pipe, PipeTransform } from '@angular/core';
import { CreatedBy, Joke } from '../models/joke.type';

@Pipe({
  name: 'filterJokes'
})
export class FilterJokesPipe implements PipeTransform {

  transform(value: Joke[], isCustom:CreatedBy): Joke[] {
    return value.filter(j=>{
      if(!j.flags.userCreated && ["all","api"].includes(isCustom)){
        return j
      }
      if(isCustom=="user"){
        return j.flags.userCreated
      }
      return j;
    });
  }

}
