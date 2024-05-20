import { Component, Input } from '@angular/core';
import { Item } from '../../../shared/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() itemInfo!: Item;

  value: number = 0;

  ngOnInit() {
  }

  modifyValue(event: any) {
    console.log("New value:", event.target.value);
  }
}
