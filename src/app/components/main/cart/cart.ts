import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart/cart';
import { Router } from '@angular/router';
import { CartItem } from '../../../model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
cartService = inject(CartService);
router=inject(Router);
isPlacingOrder = false;
isOrderPlaced = false;

  get cartItems() {
    return this.cartService.cart;
  }

  get itemCount(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  get totalOriginalPrice(): number {
    return this.cartItems.reduce((sum, item) => {
      const original = item.price;
      return sum + original * item.quantity;
    }, 0);
  }

  get totalDiscount(): number {
    return this.totalOriginalPrice - this.subtotal;
  }

  get tax(): number {
    // Example 5% GST
    return Math.round(this.subtotal * 0.05);
  }

  get packingCharge(): number {
    return this.cartItems.length > 0 ? 20 : 0;
  }

  get grandTotal(): number {
    return this.subtotal + this.tax + this.packingCharge;
  }
  navigateToProductPage(){
     this.router.navigate(['dashboard/products']);
  }
  increaseQty(item: CartItem): void {
   this.cartService.addQuantity(item);
  }

  decreaseQty(item: CartItem): void {
    this.cartService.decreaseQuantity(item);
  }

  removeItem(item: CartItem): void {
   this.cartService.removeItem(item);
  }

  trackByCartItem(index: number, item: any): string {
    return `${item.productId}-${item.variantId}`;
  }

  onCheckout(): void {
     if (!this.cartService.cart.length) return;
    this.isPlacingOrder=true;
    //we will call a service then make isOrderPlaced true
    this.isOrderPlaced = true;
    setTimeout(() => {
      this.isOrderPlaced = false;
      this.closeOrderSuccess();
      this.cartService.makeEmpty();
       this.router.navigate(['/dashboard/products']);
    }, 2500);
  }
  closeOrderSuccess(): void {
    this.isOrderPlaced = false;
  }
}
