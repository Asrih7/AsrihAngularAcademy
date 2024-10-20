# Unsubscribe in Angular

In Angular, managing subscriptions is crucial to avoid memory leaks and improve the performance of your application. Here are five ways to unsubscribe in Angular:

1. Using the takeUntil operator:

    - Create a subject to act as a notifier.
    - In your component, create a private property for the subject.
    - Subscribe to observables using the takeUntil operator with the subject as the parameter.
    - Emit a value on the subject when you want to unsubscribe, typically in the ngOnDestroy lifecycle hook.
    - In the ngOnDestroy hook, call complete() on the subject to stop emitting values.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subject } from 'rxjs';
    import { takeUntil } from 'rxjs/operators';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private unsubscribe$ = new Subject<void>();

      ngOnInit() {
        // Subscribe to an observable
        someObservable.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
      }
    }
    ```

2. Using the async pipe:

    - In your template, use the async pipe to subscribe to observables directly.
    - Angular automatically handles the subscription and unsubscription for you.
    - Ensure you don't manually subscribe to the observable in your component.

    ```html
    <div>{{ someObservable$ | async }}</div>
    ```

3. Using the Subscription object:

    - Declare a Subscription property in your component.
    - Assign the subscription to the property when subscribing.
    - In the ngOnDestroy hook, unsubscribe from the subscription.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subscription } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscription: Subscription;

      ngOnInit() {
        // Assign the subscription
        this.subscription = someObservable.subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        // Unsubscribe from the subscription
        this.subscription.unsubscribe();
      }
    }
    ```

4. Using the unsubscribe operator:

    - Store the subscription in a variable.
    - Call the unsubscribe method on the subscription in the ngOnDestroy hook.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscription;

      ngOnInit() {
        // Assign the subscription
        this.subscription = someObservable.subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        // Unsubscribe from the subscription
        this.subscription.unsubscribe();
      }
    }
    ```

5. Using the ngOnDestroy hook and manual unsubscription:

    - Declare an array to store all the subscriptions.
    - Push the subscription to the array when subscribing.
    - Loop through the array in the ngOnDestroy hook and unsubscribe from each subscription.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subscription } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscriptions: Subscription[] = [];

      ngOnInit() {
        // Push the subscription to the array
        this.subscriptions.push(someObservable.subscribe((data) => {
          // Handle data
        }));
      }

      ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
      }
    }
    ```

