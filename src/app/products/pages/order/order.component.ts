import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public sortBy?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: 'Windstorm',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Bombasto',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Magneta',
      canFly: true,
      color: Color.black
    },
    {
      name: 'Tornado',
      canFly: false,
      color: Color.green
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ): void {
    this.sortBy = value;
  }
}
