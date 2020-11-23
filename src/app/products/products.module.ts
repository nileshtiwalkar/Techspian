import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductsComponent, AddProductDialogComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,MatCardModule,MatIconModule,MatButtonModule,MatDialogModule,
    
  FormsModule, ReactiveFormsModule 

  ]
})
export class ProductsModule { }
