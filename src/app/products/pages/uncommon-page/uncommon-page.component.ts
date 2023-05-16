import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Fernando';
  public gender: 'male' | 'female'= 'male' ;
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //I18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Fernando', 'Melissa', 'Alejandra'];
  public clientsMap: {[key: string]: string} = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void {
    this.clients.shift();
  }

  // keyvalue Pipe
  public person = {
    name: 'Fernado',
    age: 32,
    address: 'Calle falsa 123'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
  tap(val => console.log(val))

  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data')
    }, 3500)
  })

}
