import { inject, Injectable } from '@angular/core';
import { CartItem, Product, ProductVariant } from '../../model';
import { HttpService } from '../api/api';
import { API_END_POINT } from '../../../globalConstants';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  httpServices=inject(HttpService);

  cart:CartItem[]=[];
  cartMap:Map<string,number>=new Map();
  getKey(item:CartItem ):string{

    return item.productId+item.variantId;
  }
  getIndex(currItem:CartItem){
    return this.cart.findIndex((item)=>item.variantId==currItem.variantId);
  }
  addQuantity(item:CartItem){
  
    let index=this.getIndex(item);
    
      this.cart[index].quantity+=1;


  }
  decreaseQuantity(item:CartItem){
   let index=this.getIndex(item);
    if(index==-1)return;
    if(this.cart[index].quantity>1)
     this.cart[index].quantity-=1;
    else 
      this.removeItem(item);

  }

  addItem(product: Product, variant: ProductVariant){

     const cartItem:CartItem = {
       productId: product._id,
       productName: product.name,
       variantId: variant._id,
       variantLabel: variant.label ?? 'Standard',
       quantityLabel: variant.quantityLabel,
       price: variant.price,
       quantity: 1,
       originalPrice: variant.originalPrice,
       url: product.image
     };
    //will add quantity if exist then push 
     let index=this.getIndex(cartItem);

    if(index!=-1){
      this.addQuantity(cartItem);
    }
    else{
      this.cart.push(cartItem);
      this.cartMap.set(this.getKey(cartItem),this.cart.length-1);
    }
    
    console.log(this.cart,"cart from service");
  }

  

  removeItem(item:CartItem){
    
   let index=this.getIndex(item);

    if(index==-1)return;
   
      this.cart.splice(index,1);
      this.cartMap.delete(this.getKey(item));
      this.createMapping();
   
  }

  createMapping(){
    this.cartMap.clear();
    let i=0;
    for(const item of this.cart){
      this.cartMap.set(item.variantId,i);
      i++;
    }
  }

 public  makeEmpty(){
    this.cartMap.clear();
    this.cart=[];
  }

  updateDatabase(){
    const payload=this.cart;
    return this.httpServices.post(API_END_POINT.UPDATE_CART,payload);
  }
}
