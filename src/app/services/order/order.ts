import { inject, Injectable } from '@angular/core';
import { HttpService } from '../api/api';
import { Cart } from '../../components/main/cart/cart';
import { API_END_POINT } from '../../../globalConstants';
import { CartService } from '../cart/cart';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Order {
  httpService=inject(HttpService);
  cartService=inject(CartService);

  createOrder(cart:Cart){
   
    return this.httpService.get(API_END_POINT.CREATE_ORDER).pipe(
      tap((res)=>{
        this.cartService.makeEmpty();
      })
    )
  }
}
