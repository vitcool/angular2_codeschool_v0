import { Component, OnInit } from "@angular/core";
import { CarModel } from "../car-model";
import { CARS } from "../mocks";

@Component({
  selector: "app-car-component",
  templateUrl: "./car-component.component.html",
  styleUrls: ["./car-component.component.css"]
})
export class CarComponentComponent implements OnInit {
  cars: CarModel[];
  constructor() {}

  ngOnInit() {
    this.cars = CARS;
  }
  
  totalCars() {
    return this.cars.length;
  }
}
