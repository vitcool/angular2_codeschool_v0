import { Component, OnInit } from "@angular/core";
import { CarModel } from "../car-model";
import { CarDataService } from "../car-data.service";

@Component({
  selector: "app-car-component",
  templateUrl: "./car-component.component.html",
  styleUrls: ["./car-component.component.css"]
})
export class CarComponentComponent implements OnInit {
  cars: CarModel[];
  constructor(private carDataService: CarDataService) {}

  ngOnInit() {
    this.carDataService.getClassParts().subscribe(cars => (this.cars = cars));
  }

  totalCars() {
    let number = 0;
    if (Array.isArray(this.cars)) {
      number = this.cars.length;
    }
    return 0;
  }

  increaseNumber(car) {
    car.number++;
  }
}
