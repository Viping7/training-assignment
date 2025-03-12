import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { JokeComponent } from './components/joke/joke.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tutorial-assignment';
}
