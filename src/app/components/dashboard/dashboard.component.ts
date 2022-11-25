import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Categories} from "../../services/enums/categories";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output()
  pickedCategory: EventEmitter<Categories> = new EventEmitter();

  readonly CATEGORIES: Categories[] = [Categories.ANIMALS, Categories.FRUITS, Categories.VEGETABLES]

  constructor() {
  }

  ngOnInit(): void {
  }

  pickCategory(category: Categories) {
    this.pickedCategory.emit(category);
  }
}
