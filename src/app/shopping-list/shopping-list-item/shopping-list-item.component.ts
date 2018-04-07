import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("item") private listItem: any
  private deleted: boolean = false;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log(this.listItem)
  }

  public remove() {
    this.myShoppingListService.remove(this.listItem)
  }

  public crossItem() {
    this.myShoppingListService.edit(
      { disabled: true, key: this.listItem.key, name: this.listItem.name })
  }

}
