import { inject, Injectable } from '@angular/core';
import { HttpService } from '../api/api';
import { API_END_POINT } from '../../../globalConstants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   httpServices=inject(HttpService);

  getAllProducts(){

    return this.httpServices.get(API_END_POINT.GET_ALL_PRODUCTS);

  }
  
}
