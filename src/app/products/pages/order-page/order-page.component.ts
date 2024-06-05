import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: "Spiderman",
      canFly: false,
      color: Color.red
    },
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black
    },
    {
      name: "Flash",
      canFly: false,
      color: Color.red
    },
    {
      name: "Green Lantern",
      canFly: true,
      color: Color.green
    }
  ]
  public sortByType?: keyof Hero;
  public sortAscName: boolean = true;
  public sortAscCanFly: boolean = true;
  public sortAscColor: boolean = true;
  public sortAsc: boolean = true;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeSort(type: keyof Hero): void {
    this.sortByType = type;
    switch (this.sortByType) {
      case 'name':
        this.sortAscName = !this.sortAscName;
        this.sortAsc = this.sortAscName;
        break;
      case 'canFly':
        this.sortAscCanFly = !this.sortAscCanFly;
        this.sortAsc = this.sortAscCanFly;
        break;
      case 'color':
        this.sortAscColor = !this.sortAscColor;
        this.sortAsc = this.sortAscColor;
        break;
    }
  }

}
