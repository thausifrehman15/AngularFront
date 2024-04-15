import { Component, OnInit } from '@angular/core';
// import { CartItem } from 'src/app/common/cart-item';
import { CartItem } from '../../common/cart-item';
// import { CartService } from 'src/app/services/cart.service';
import { CartService } from '../../services/cart.service';
import { Observable, Subject, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[]=[];
  totalPrice: number=0;
  totalQuantity:number=0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.listCartDetails();
    
  }
  listCartDetails() {
  
this.cartItems = this.cartService.cartItems;
this.cartService.totalPrice.subscribe(
  (  data: number) => this.totalPrice = data


);



this.cartService.totalQuantity.subscribe(
  (  data: number) => this.totalQuantity = data


);

this.cartService.computeCartTotals();
}
incrementQuantity(theCartItem: CartItem)
{
  this.cartService.addToCart(theCartItem);
}
decrementQuantity(theCartItem: CartItem)
{
  this.cartService.decrementQuantity(theCartItem);
}
remove(theCartItem: CartItem)
{
  this.cartService.remove(theCartItem);
}
}