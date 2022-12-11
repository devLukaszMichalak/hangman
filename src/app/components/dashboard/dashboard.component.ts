import {Component, EventEmitter, Output} from '@angular/core';
import {Categories} from "../../services/enums/categories";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Output()
  pickedCategory: EventEmitter<Categories> = new EventEmitter();

  readonly CATEGORIES: Categories[] = [
    Categories.ANIMALS,
    Categories.FRUITS,
    Categories.VEGETABLES,
    Categories.STATES,
    Categories.CITIES,
    Categories.CAR_BRANDS]

  pickCategory(category: Categories) {
    this.pickedCategory.emit(category);
  }
}
