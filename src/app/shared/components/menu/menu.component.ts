import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes Angular',
        icon: "pi pi-desktop",
        items: [
          {
            label: "Texto y fechas",
            icon: "pi pi-align-left",
            routerLink: "/"
          },
          {
            label: "Números",
            icon: "pi pi-dollar",
            routerLink: "number"
          },
          {
            label: "No comunes",
            icon: "pi pi-globe",
            routerLink: "uncommon"
          }
        ]
      },
      {
        label: "Pipes personalizados",
        icon: "pi pi-cog",
        items: [
          {
            label: "Custom pipes",
            icon: "pi pi-globe",
            routerLink: "custom"
          }
        ]
      }
    ];
  }

}
