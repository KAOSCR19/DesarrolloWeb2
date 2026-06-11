import {Component, signal} from '@angular/core';

@Component({
    templateUrl:'./counter.component.html', //Se puede agregar las etiquetas de html directamente aquí, pero es mejor tenerlo separado en un archivo
    styleUrl:'./counter.component.css'
})
export class CounterPageComponent{ 
    contador = 10;
    contadorSignal = signal(5);

    increaseBy(value:number){ 
        this.contador += value;
        this.contadorSignal.set(this.contadorSignal() + value);
    }

    reset() {
        this.contador = 10;
        this.contadorSignal.set(5);
    }
}