# Ngrx 
Step 1: Install NgRx
You can install NgRx by running the following command in your Angular project directory:


```bash
ng add @ngrx/store @ngrx/effects @ngrx/store-devtools
```

This command will install the core NgRx libraries, including the Store, Effects, and Store DevTools for debugging.

Step 2: Set Up State Management
Create a Feature State
Define State Interface: Create a new file named counter.model.ts to define the state structure.

```ts
// counter.model.ts
export interface CounterState {
  count: number;
}
```
Create Actions: Create a file named counter.actions.ts for defining actions.

```ts
// counter.actions.ts
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
```

Create Reducer: Create a file named counter.reducer.ts to handle state changes.
```ts
// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { CounterState } from './counter.model';

export const initialState: CounterState = {
  count: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ count: state.count + 1 })),
  on(decrement, (state) => ({ count: state.count - 1 })),
  on(reset, () => initialState)
);

export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}
```

Register the Reducer: In your main application module, import the StoreModule and register the reducer.

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }) // Register the reducer
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Step 3: Create a Component to Use the Store
Create a Counter Component: Generate a counter component using Angular CLI.
```bash
ng generate component counter
```

Implement the Counter Component: Update the counter component to use the NgRx store.

```ts
// counter.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { CounterState } from './counter.model';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ count$ | async }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {
    this.count$ = store.select(state => state.counter.count); // Select the count from the store
  }

  increment() {
    this.store.dispatch(increment()); // Dispatch increment action
  }

  decrement() {
    this.store.dispatch(decrement()); // Dispatch decrement action
  }

  reset() {
    this.store.dispatch(reset()); // Dispatch reset action
  }
}
```
Update the Main Application Component: Include the counter component in your main application component
```ts
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to NgRx Example</h1>
    <app-counter></app-counter>
  `,
})
export class AppComponent {}
```

Step 4: Run Your Application
Now you can run your Angular application to see NgRx in action:
```bash
ng serve
```
Summary
In this example, we:

Installed NgRx and set up a simple counter state management system.
Created actions, a reducer, and a component to interact with the store.
Used the store to manage state and dispatch actions from the UI.
If you have any further questions or need more examples, feel free to ask!