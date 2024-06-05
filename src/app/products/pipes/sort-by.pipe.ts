import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {


  transform(heroes: Hero[], sortBy?: keyof Hero | '', asc?: boolean): Hero[] {
    const sort: 1 | -1 = asc ? 1 : -1;
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name) ? sort : -sort);
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly > b.canFly) ? sort : -sort);
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? sort : -sort);
      default:
        return heroes;
    }
  }

}
