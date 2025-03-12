import { Directive, effect, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';
import { Flags } from '../models/joke.type';

@Directive({
  selector: '[appMarkCustomJoke]'
})
export class MarkCustomJokeDirective {
  flags = input<Flags>();
  ele = inject(ElementRef);
  @HostBinding("style.color") color = "blue"
  @HostListener('click') showInfo(){
    if(this.flags()?.userCreated){
      alert("User Created it manually")
    }else{
      alert("This is from API")
    }
  }
  styles = effect(()=>{
    if(this.flags()?.userCreated){
      this.ele.nativeElement.style.background = "green"
      this.ele.nativeElement.innerText = "Custom"
      this.color = 'white';
    } else{
      this.ele.nativeElement.style.background = "none"
      this.ele.nativeElement.innerText = "API"
      this.color = 'blue';
    }
  })

}
