import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:"", pathMatch:'full', component:HomeComponent
    },
    {
        path:"jokes", loadComponent:()=>import("./components/joke/joke.component").then(c=>c.JokeComponent)
    },
    {
        path:"create-joke", loadComponent:()=>import("./components/create-joke/create-joke.component").then(c=>c.CreateJokeComponent)
    },
    {
        path:"**", loadComponent:()=>import("./components/not-found/not-found.component").then(c=>c.NotFoundComponent)
    }
];
