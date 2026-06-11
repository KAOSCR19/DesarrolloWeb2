import { Component, signal} from '@angular/core';

@Component({
    templateUrl: './hero-page.component.html',
    styleUrl:'./hero-page.component.css'
})
export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);
    getHeroDescription() {
        return `${this.name()} - ${this.age()}`;

    }

    changeHero() {
    this.name.set('Spiderman');
    }

    changeAge() {
        this.age.set(60);
    }

    ResetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}



