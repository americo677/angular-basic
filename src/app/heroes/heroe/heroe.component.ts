import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HereoComponent {

    public name: string = 'Ironman';
    public age: number = 45;

    get capitalizedName() {
        return this.name.toUpperCase();
    }

    getName() {
        return `${ this.name } - ${ this.age }`;
    }

    changeName(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 16;
    }
}