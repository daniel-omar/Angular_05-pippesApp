import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = "Fernando";
  public gender: 'male' | 'female' = "male"
  public invitationMape = {
    'male': "invitarlo",
    'female': "invitarla"
  }

  public changeClient(): void {
    this.name = "Melissa";
    this.gender = "female"
  }

  //i18n Plutal
  public clients: string[] = ["Pedro", "Fernando", "Eduardo", "Carlos", "Andres", "Omar", "José", "Miguel"]
  public clientsMap = {
    '=0': 'ningún cliente esperando.',
    'other': '# clientes esperando.'
  }
  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'SJL, Lima'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000)  //Crear observables, en estee caso cada 2 segundos
    .pipe(
      tap(value => console.log('tap:', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data GAA");
      console.log("DATA ");
    }, 2000)
  })


}
