import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('MyTokenApp');
    if(token){
      console.log(token);
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}
