import { Component } from '@angular/core';

@Component({
  selector: 'products-number-page',
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.scss']
})
export class NumberPageComponent {
  public totalSells: number = 25645651232.12314123;
  public percent: number = 0.1545;
}
