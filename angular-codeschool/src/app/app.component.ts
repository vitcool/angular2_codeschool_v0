import { Component } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { CarComponentComponent } from './car-component/car-component.component'
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "world";
}
