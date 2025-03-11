import { Component, signal } from '@angular/core';
import { DynamicFormComponent } from '../common/dynamic-form/dynamic-form.component';
import { Field } from '../../models/field.type';
import { Validators } from '@angular/forms';
import { JokesService } from '../../services/jokes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-joke',
  imports: [DynamicFormComponent],
  templateUrl: './create-joke.component.html',
  styleUrl: './create-joke.component.scss'
})
export class CreateJokeComponent {
  jokeFields = signal<Field[]>([ {
      type: "text",
      name:"setup",
      label: "Setup",
      validations:[Validators.required]
  },{
    type: "text",
    name:"delivery",
    label: "Delivery",
    validations:[Validators.required]
},{
    type: "select",
    name:"category",
    label: "Category",
    validations:[Validators.required],
    options:["Pun" , "Programming"]
}]);


constructor(private jokeService:JokesService,private router:Router){

}
createJoke(jokePayload:any){
  this.jokeService.createJoke(jokePayload.category,jokePayload.setup,jokePayload.delivery)
  this.router.navigate(["/jokes"])
}
}
