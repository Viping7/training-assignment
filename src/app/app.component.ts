import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeComponent } from './components/joke/joke.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tutorial-assignment';
}
