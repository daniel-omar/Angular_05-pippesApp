import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-pages',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent {

  public nameLower: string = "fernando";
  public nameUpper: string = "FERNANDO";
  public nameTitle: string = "FerNanDo";

  public customDate:Date=new Date();

}
