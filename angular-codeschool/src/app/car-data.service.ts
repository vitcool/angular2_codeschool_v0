import { Injectable } from "@angular/core";
import { CarModel } from "./car-model";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class CarDataService {
  getClassParts() {
    return this.http
      .get("assets/cars.json")
      .map(response => <CarModel[]>response.json().data);
  }
  constructor(private http: Http) {}
}
