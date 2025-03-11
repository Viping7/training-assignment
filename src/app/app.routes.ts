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
        path:"**", loadComponent:()=>import("./components/not-found/not-found.component").then(c=>c.NotFoundComponent)
    }
];
