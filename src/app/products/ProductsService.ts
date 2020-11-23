import { Injectable } from '@angular/core';
import { Products } from '../usermodel';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Products[] = [
    {id: 1, name: 'Hydrogen', price: 1.0079, quantity: 10},
    {id: 2, name: 'Brown eggs', price: 1.23, quantity: 13},
    {id: 3, name: 'vegetable', price: 1.09, quantity: 30},
    {id: 4, name: 'fruit', price: 1.0079, quantity: 3},

  ];
  constructor() { }

  getProduct(): any {
    return this.products;
  }
}
