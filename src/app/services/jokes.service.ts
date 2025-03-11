import { Injectable } from '@angular/core';
import { Category, Joke } from '../models/joke.type';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokes: { [key in Category]: Joke[] } = {
    "Pun": [{
      "error": false,
      "category": "Pun",
      "type": "twopart",
      "setup": "Why does the size of the snack not matter to a giraffe?",
      "delivery": "Because even a little bit goes a long way.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": true,
      "id": 290,
      "lang": "en"
    }],
    "Programming": [{
      "error": false,
      "category": "Programming",
      "type": "twopart",
      "setup": "Why are modern programming languages so materialistic?",
      "delivery": "Because they are object-oriented.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 21,
      "safe": true,
      "lang": "en"
    }]
  
  }
  
  constructor() { }
  
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
        "explicit": false
      },
      "id": 21,
      "safe": true,
      "lang": "en"
    }
    this.jokes[category].push(payload);
  }
}
