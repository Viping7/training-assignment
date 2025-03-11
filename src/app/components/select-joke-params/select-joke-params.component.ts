import { Component, ElementRef, input, output, ViewChild, viewChild } from '@angular/core';
import { Category } from '../../models/joke.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-joke-params',
  imports: [FormsModule],
  templateUrl: './select-joke-params.component.html',
  styleUrl: './select-joke-params.component.scss'
})
export class SelectJokeParamsComponent {
  jokeTypes = input.required<Category[]>();
  showJokeEvent = output<Category>();
  @ViewChild("jokeTypeSelector") jokeTypeSelector!: ElementRef;

  showJoke(){
    const jokeType = this.jokeTypeSelector.nativeElement.value;
    this.showJokeEvent.emit(jokeType);
  }
}
