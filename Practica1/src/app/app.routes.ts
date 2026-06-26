import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { AnimeComponent } from './pages/anime/anime-page.component';
import { AnimeSuperComponent } from './pages/anime-super/anime-super-page.component';

export const routes: Routes = [
    {
        path:'',
        component: CounterPageComponent,
    },
    {
        path:'hero',
        component: HeroPageComponent,
    },
    {
        path:'anime',
        component: AnimeComponent,
    },
    {
        path:'anime-super',
        component: AnimeSuperComponent,
    }
];
