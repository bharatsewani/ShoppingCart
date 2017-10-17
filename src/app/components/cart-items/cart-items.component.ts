import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  public products: any;
  public item: any;
  public imageIndex: any;
  public selectedQty: any;
  public selectedSize: any;
  public totalAmount: any;
  public discount: any;
  public modalRef: BsModalRef;
  constructor(private productService: ProductService, private modalService: BsModalService) { }
 
  ngOnInit() {
     this.productService.getProducts().subscribe((response: any) => {
		   this.products = response.productsInCart;
      });
  }

  public openModal(template: TemplateRef<any>, item, index) {
    this.item = item;
    this.imageIndex = index+1;
    this.selectedQty = item.p_quantity;
    this.selectedSize = item.p_selected_size;
    this.modalRef = this.modalService.show(template);
  }

  getSubTotal(){
    let totalAmount = 0;
     this.products.forEach(function(item){
       totalAmount += item.p_price * item.p_quantity;
     });
     this.totalAmount = totalAmount;
     return totalAmount;
  }
  getDiscount(){
    let totalItems = this.products.map(x=>x.p_quantity).reduce((a, b) => a + b, 0);
    let discount = 0
    if(totalItems == 3){
      discount = (this.totalAmount*5)/100;
    }
    else if(totalItems > 3 && totalItems ){
      discount = (this.totalAmount*10)/100;
    }
    else if(totalItems > 10){
      discount = (this.totalAmount*25)/100;
    }
    this.discount = discount;
    return discount;
  }

  editProduct(item){
     this.products.find(x=>x.p_id == item.p_id).p_quantity = parseInt(this.selectedQty);
     this.products.find(x=>x.p_id == item.p_id).p_selected_size = this.selectedSize;
     this.modalRef.hide();
  }

}
