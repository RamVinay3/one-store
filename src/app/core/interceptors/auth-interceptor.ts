import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  /**
   * Clone request
   * Add credentials for cookies
   */
  const clonedRequest = req.clone({
    withCredentials: true
  });

  return next(clonedRequest);
};