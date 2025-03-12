import { Injectable } from '@angular/core';
import { Category, Joke } from '../models/joke.type';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private jokesObj = new BehaviorSubject<Joke[]>([]);
  private userCreatedJokes = new BehaviorSubject<Joke[]>([]);

  jokes = this.jokesObj.asObservable();
  constructor(private httpClient: HttpClient) {
}
  
  getFlaggedJokes(){
    return ["Why does the size of the snack not matter to a giraffe?"]
  }

  getJokes(jokeType:Category){
    this.httpClient.get<{jokes:Joke[]}>(`https://v2.jokeapi.dev/joke/${jokeType}?type=twopart`).subscribe(jokeRes=>{
      return this.jokesObj.next([...jokeRes.jokes,...this.userCreatedJokes.getValue()])
    })
  }
  createJoke(category:Category,setup:string, delivery:string){
    const payload:Joke = {
      "error": false,
      "category":category,
      "type": "twopart",
      "setup": setup,
      "delivery": delivery,
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false,
        "userCreated":true,
      },
      "id": 21,
      "safe": true,
      "lang": "en"
    }
    const currentJokes = this.jokesObj.getValue();

    const updatedJokes = [...currentJokes,payload]
    this.userCreatedJokes.next(updatedJokes);
    
    // this.jokes[category].push(payload);
  }
}
