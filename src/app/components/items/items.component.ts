import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:any= Item;
  total:number = 0;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.getTotal();
    });
  } 

  deleteItem(item: any= Item){
    this.items = this.items.filter((i:any) => i.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  addItem(item: any =Item){
    console.log(item);
    this.itemService.addItem(item).subscribe(i => {
      this.items.unshift(i);
      this.getTotal();
    });
  }

  toggleItem(item:any =Item){
    this.itemService.toggleCompleted(item).subscribe(i => {})
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
    .filter((item:any) => item.completed === false)
    .map((item:any) => item.price * item.quantity)
    .reduce((acc:any, item:any) => acc += item, 0);
  }


  }


