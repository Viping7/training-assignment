import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { JokeComponent } from './components/joke/joke.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tutorial-assignment';
}
