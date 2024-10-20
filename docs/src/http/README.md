# HTTP

Import HttpClient Module in Root Module -

```typescript
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Import Required Module in Component/Service -

```typescript
import { HttpClient } from '@angular/common/http';
```

Inject HttpClient service -

```typescript
constructor(public http: HttpClient) {
}
```

### HTTP GET

```typescript
getData(){
  return this.http.get('url');
}
```

### HTTP POST

```typescript
sendData(data: any){
  return this.http.post('url', data);
}
```

### HTTP PUT

```typescript
updateData(data: any){
  return this.http.put('url', data);
}
```

### HTTP PATCH

```typescript
updateData(data: any){
  return this.http.patch('url', data);
}
```

### HTTP DELETE

```typescript
deleteData(id: string){
  return this.http.delete(`url/${id}`);
}
```

### HTTP Interceptor

Http Interceptors are a powerful feature provided by the `@angular/common/http` module. They allow you to intercept and modify HTTP requests and responses in your Angular application. With interceptors, you can perform various tasks such as authentication, logging, error handling, and more. Interceptors provide a way to add global behavior to your HTTP requests and responses, making it easier to implement common functionalities across your application.

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request started');
    return next.handle(req).pipe(
      catchError((error) => {
        console.error('Request failed', error);
        return throwError(error);
      })
    );
  }
}
```

In angular v17, the `HttpInterceptor` interface has been deprecated in favor of the `HttpInterceptorFn` type. The `HttpInterceptorFn` type is a function that takes a `HttpRequest` and a `HttpHandler` and returns an `Observable<HttpEvent>`. Here is an example of how to create an interceptor using the `HttpInterceptorFn` type:

```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request started');
  return next.handle(req).pipe(
    catchError((error) => {
      console.error('Request failed', error);
      return throwError(error);
    })
  );
};
```

### Using Observable

```typescript
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('utl');
  }

  sendData(data: any): Observable<any> {
    return this.http.post<any>('utl', data);
  }

  updateData(data: any): Observable<any> {
    return this.http.put<any>('utl', data);
  }

  updateData(data: any): Observable<any> {
    return this.http.patch<any>('utl', data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`utl/${id}`);
  }
}
```

Options—Headers/Params

```typescript
import { HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders({
  'Content-Type': 'application
  'Authorization': 'Bearer my-token'
});

const params = new HttpParams()
  .set('param1', 'value1')
  .set('param2', 'value2');

this.http.get('url', { headers, params });

this.http.post('url', data, { headers, params });

this.http.put('url', data, { headers, params });

this.http.patch('url', data, { headers, params });

this.http.delete(`url/${id}`, { headers, params });
```

Options—Observe/Response Type

```typescript
import { HttpResponse } from '@angular/common/http';

this.http.get('url', { observe: 'response' });
```