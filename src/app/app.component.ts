import {Component} from '@angular/core';
import {Categories} from "./services/enums/categories";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  category?: Categories;

  categoryCollector(category: Categories) {
    console.log(category)
    this.category = category;
  }
}
