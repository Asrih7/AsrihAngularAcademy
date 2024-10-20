# HTTP Client Module

The `HttpClientModule` is used to make HTTP requests to a server in an Angular application. It provides services for making GET, POST, PUT, DELETE, and other types of requests.

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
})

export class AppModule {}
```

In the angular v17 and above, the `HttpClientModule` has been deprecated. Instead, you can use the `provideHttpClient` function to provide the `HttpClient` service in your application. Here is an example of how to use the `provideHttpClient` function to provide the `HttpClient` service in your application:

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
```