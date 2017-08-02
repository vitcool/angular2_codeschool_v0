import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'world';
  cars = [
    {
      "vendor":"VW", 
      "model": "Golf V",
      "price": 8000
    },
    {
      "vendor":"Opel", 
      "model": "Astra",
      "price": 7300
    }];

    totalCars(){
      return this.cars.length;
    }
}
