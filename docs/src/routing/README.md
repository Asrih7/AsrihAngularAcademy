# Routing

Routing is used to navigate between different components in an Angular application. It allows users to move between different parts of the application by changing the URL in the browser.

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
```

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [];
```

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
```



### Router Outlet

The `router-outlet` directive is used to render the component associated with the current route.

```html
<router-outlet></router-outlet>
```



### Router Link

The `routerLink` directive is used to navigate to a different route when the element is clicked.

```html
<a [routerLink]="['/home']">Home</a>
```



### Router Link Active

The `routerLinkActive` directive is used to add a CSS class to an element when the associated route is active.

```html
<a routerLink="/home" routerLinkActive="active">Home</a>
```



### Router Link Active Options

The `routerLinkActiveOptions` directive is used to configure the behavior of the `routerLinkActive` directive.

```html
<a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
```



### Router State

The `RouterState` class is used to access the current state of the router.

```ts
import { Router } from '@angular/router';

constructor(private router: Router) {
  const state = this.router.routerState;
  console.log(state);
}
```



### Router Events

The `RouterEvents` class is used to listen for router events such as navigation start, navigation end, and navigation error.

```ts
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

constructor(private router: Router) {
  router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
    }
    if (event instanceof NavigationEnd) {
      console.log('Navigation ended');
    }
    if (event instanceof NavigationError) {
      console.log('Navigation error');
    }
  });
}
```



### Router Guards

Router guards are used to control navigation and access to routes in an Angular application. They can be used to prevent unauthorized access to certain routes, redirect users to a login page, or perform other actions before navigating to a route.

```ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})

export class AppRoutingModule {}
```

