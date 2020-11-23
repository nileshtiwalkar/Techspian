import { Component, HostBinding, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { ProductsService } from "./ProductsService";
import { Products } from '../usermodel';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  user: any;
  products:Products[];
  @HostBinding('class') class = 'wrapper';
  constructor(private _productsService: ProductsService,public dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'name', 'quantity', 'rate' ,'button'];
  dataSource : any;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.dataSource=new MatTableDataSource<Products>(this._productsService.getProduct());
  }
  addProduct(){
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '300px',
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.action!="close"){
      this.products=this._productsService.getProduct();
      this.products.push(result.entity)
      this.dataSource = new MatTableDataSource<Products>(this.products);
      console.log('The dialog was closed');}
      else{
        return;
      }
     
    });
  }
  removeProduct(product:Products){
    var productList=this._productsService.getProduct()
    let index: number = productList.indexOf(product);
        if (index !== -1) {
          productList.splice(index, 1);
          this.dataSource = new MatTableDataSource<Products>(productList);
          
        }
  }

}
