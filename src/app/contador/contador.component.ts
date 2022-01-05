import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>

        <h2>La base es {{ base }}</h2>

        <button (click)=" updateCounter(base) "> + {{ base }} </button>
        <span>{{ contador }}</span>
        <button (click)=" updateCounter(-base) "> - {{ base }} </button>    
    `,
})

export class ContadorComponent {
    
    public title: string = 'Contador App';
    public contador: number = 10;
    public base: number = 5;
  
    increase() {
      this.contador += 1;
    }
  
    decrease() {
      this.contador -= 1;
    }
  
    updateCounter(value: number) {
       this.contador += value;
    }  

}