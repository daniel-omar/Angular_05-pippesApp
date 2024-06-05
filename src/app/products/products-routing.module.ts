import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

export const routes: Routes = [
  {
    path: "",
    component: BasicPageComponent
  },
  {
    path: "number",
    component: NumberPageComponent
  },
  {
    path: "uncommon",
    component: UncommonPageComponent
  },
  {
    path: "custom",
    component: OrderPageComponent
  },
  {
    path: "**",
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
