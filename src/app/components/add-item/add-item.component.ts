import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Item } from 'src/app/models/item'
import { ItemService } from 'src/app/services/item.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
/**cambia algo de aqui */
  title: any = String;
  price: any = Number;
  quantity:any = Number;
  addItem: any =EventEmitter;

  constructor(private router:Router, private itemService:ItemService) { }

  ngOnInit(): void {}
  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    });

  }
}
