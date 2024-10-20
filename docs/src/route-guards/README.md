#  Route Guards

Route guards are used to control access to routes in an Angular application. They allow you to implement logic that determines whether a user is allowed to navigate to a particular route or not. Route guards can be used to protect routes based on user authentication, authorization, or other criteria.

There are four types of route guards in Angular:

***CanActivate***:

The CanActivate guard is used to determine whether a route can be activated or not. It is typically used to check if a user is authenticated before allowing access to a route. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the route is activated; if it returns false, the route is blocked.

```typescript
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow access
  }
}
```

***CanActivateChild***:

The CanActivateChild guard is similar to CanActivate but is used to protect child routes of a parent route. It is applied to the parent route configuration and is triggered when any child route is activated. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value.

```typescript
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow access
  }
}
```

***CanDeactivate***:

The CanDeactivate guard is used to determine whether a route can be deactivated or not. It is typically used to prompt the user for confirmation before leaving a route with unsaved changes. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the route is deactivated; if it returns false, the route is not deactivated.

```typescript
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<any> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user wants to leave the route
    return confirm('Are you sure you want to leave?');
  }
}
```

***CanLoad***:

The CanLoad guard is used to determine whether a lazy-loaded module can be loaded or not. It is applied to the route configuration of a lazy-loaded module and is triggered when the module is about to be loaded. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the module is loaded; if it returns false, the module is not loaded.

```typescript
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow loading
  }
}
```

