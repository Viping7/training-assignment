import { Directive, effect, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';
import { Flags } from '../models/joke.type';

@Directive({
  selector: '[appMarkCustomJoke]'
})
export class MarkCustomJokeDirective {
  userCreated = input<boolean|undefined>();
  political = input<boolean|undefined>();
  ele = inject(ElementRef);
  @HostBinding("style.color") color = "blue"
  @HostListener('click') showInfo(){
    if(this.userCreated()){
      alert("User Created it manually")
    }else{
      alert("This is from API")
    }
  }
  userCreatedstyles = effect(()=>{
    if(this.userCreated()){
      this.ele.nativeElement.style.background = "green"
      this.ele.nativeElement.innerText = "Custom"
      this.color = 'white';
    } else{
      this.ele.nativeElement.style.background = "none"
      this.ele.nativeElement.innerText = "API"
      this.color = 'white';
    }
  })
  politicalStyles = effect(()=>{
    if(this.political()){
      this.ele.nativeElement.style.background = "red"
      this.ele.nativeElement.style.display = "inline-block"
      this.ele.nativeElement.innerText = "Flagged as Political"
      this.color = 'white';
    } else{
      this.ele.nativeElement.style.display = "none"
      this.ele.nativeElement.innerText = ""
      this.color = 'white';
    }
  })

}
