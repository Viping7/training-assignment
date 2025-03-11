import { Component, signal } from '@angular/core';
import { Joke } from '../../models/joke.type';

@Component({
  selector: 'app-joke',
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})

export class JokeComponent {
  joke =  signal<Joke>({
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
}
)
}
