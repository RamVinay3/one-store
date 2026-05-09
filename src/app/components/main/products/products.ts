import { Component, inject } from '@angular/core';
import { Product, ProductVariant } from '../../../model';
import { CartService } from '../../../services/cart/cart';
import { products } from '../../../db-data';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products=products;
  cartService = inject(CartService);
  selectedProduct: Product | null = null;
  isVariantSheetOpen = false;

  closeVariantSheet(): void {
    this.isVariantSheetOpen = false;
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }
  chooseProduct(product:Product):void{

    if(product.variants.length>1){
       this.selectedProduct = product;
    this.isVariantSheetOpen = true;
    document.body.style.overflow = 'hidden';
    }
    else{
      this.addToCart(product,product.variants[0]);
      this.selectedProduct=product;
    }
      
  }
  addToCart(product: Product, variant: ProductVariant): void {
   

   
     this.cartService.addItem(product,variant);

    this.closeVariantSheet();
  }
   getPrimaryVariant(product: Product): ProductVariant {
    return product.variants[0];
  }

  hasDiscount(variant: ProductVariant): boolean {
    return !!variant.originalPrice && variant.originalPrice > variant.price;
  }

  getDiscountPercent(variant: ProductVariant): number {
    if (!this.hasDiscount(variant) || !variant.originalPrice) {
      return 0;
    }

    return Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100);
  }

  getVariantLabel(variant: ProductVariant): string {
    return variant.label || 'Standard';
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
  trackByVariantId(index: number, variant: ProductVariant): string {
    return variant.id;
  }

}
