import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Products } from 'src/app/usermodel';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {
  productForm: FormGroup;
  product:Products
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProductDialogComponent>){
      this.product=new Products({});
    this.productForm = this.fb.group({
      id:Math.floor(Math.random()),
      name: [this.product.name],
      price: [this.product.price],
      quantity: [this.product.quantity],
      
     
    });
  
   }
  
  ngOnInit(): void {
    
    let self = this;
    
  }
  onSubmit(productForm: any){
    productForm
    let self = this;
    self.dialogRef.close({ action: 'save', entity: productForm.value });
  }
  cancel(){
    let self = this;
    self.dialogRef.close({ action: 'close' });
  }

}
