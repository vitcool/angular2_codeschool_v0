import { Component, OnInit } from '@angular/core';
import { CarModel } from "../car-model";

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cars: CarModel[] = [
    {
      "id": 0,
      "vendor":"VW", 
      "model": "Golf V",
      "price": 8000
    },
    {
      "id": 1,
      "vendor":"Opel", 
      "model": "Astra",
      "price": 7300
    }];

    totalCars(){
      return this.cars.length;
    }

}
