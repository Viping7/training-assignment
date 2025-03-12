import { Component, ElementRef, input, output, SimpleChange, SimpleChanges, ViewChild, viewChild } from '@angular/core';
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
  showJokeEvent = output<{jokeType:Category,all?:boolean}>();
  @ViewChild("jokeTypeSelector") jokeTypeSelector!: ElementRef;

  ngOnChanges(changes:SimpleChanges){
    const currentElements =  changes['jokeTypes'].currentValue;
    const prevElements=   changes['jokeTypes'].previousValue;
    const newElement = currentElements.filter((joke:Category) => !prevElements?.includes(joke));
    if(newElement.length>0 && !changes['jokeTypes'].firstChange )
    alert(`New Category ${newElement[0]} is added`);
  }

  ngAfterViewInit(){
    console.log("Can access child now", this.jokeTypeSelector);
  }
  
  showJoke(){
    const jokeType = this.jokeTypeSelector.nativeElement.value;
    this.showJokeEvent.emit({jokeType});
  }
  showAllJokes(){
    const jokeType = this.jokeTypeSelector.nativeElement.value;
    this.showJokeEvent.emit({jokeType,all:true});
  }
}
