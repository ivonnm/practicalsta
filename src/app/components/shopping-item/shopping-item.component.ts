import { Component, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  item:any = Item;
   deleteItem: any = EventEmitter;
   toggleITem: any = EventEmitter;

  constructor( private itemService:ItemService) { }

  ngOnInit(): void { }
  setClasses(){
    let classes = {
      item: true,
      'completed': this.item.completed
    };

    return classes;
  }

  onToggle(item:any){
    item.completed = !item.completed;
   
    this.toggleITem.emit(item);
  }

  onDelete(item:any){
    this.deleteItem.emit(item);
  }




}
