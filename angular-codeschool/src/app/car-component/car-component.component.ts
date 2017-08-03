import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
