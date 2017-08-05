import { Component } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { CarComponentComponent } from './car-component/car-component.component'
import { CarDataService } from "./car-data.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [CarDataService]
})
export class AppComponent {
  title = "world";
}
