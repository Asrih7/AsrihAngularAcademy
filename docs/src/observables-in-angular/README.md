# Observables in Angular

An observable is a class that can be used to handle asynchronous data streams. Observables are used to handle data that can arrive over time, such as data received from a server, user input, or timed events.

### Creating Observables

There are several ways to create observables in Angular:

***Using the Observable Constructor***: You can create an observable using the `Observable` constructor and the `new` keyword. The constructor takes a function as an argument, which is called when the observable is subscribed to.

```typescript
import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
```

***Using the `of` Operator***: You can create an observable from a list of values using the `of` operator. The `of` operator emits each value in the list in sequence.

```typescript
import { of } from 'rxjs';

const observable = of('Hello', 'World');
```

***Using the `from` Operator***: You can create an observable from an array, promise, or iterable using the `from` operator. The `from` operator emits each item in the array, promise, or iterable in sequence.

```typescript
import { from } from 'rxjs';

const observable = from(['Hello', 'World']);
```

### Subscribing to Observables

To receive data from an observable, you need to subscribe to it. The `subscribe` method is used to subscribe to an observable and receive data emitted by the observable.

```typescript
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.log('Complete')
});
```

### Difference between `observables` and `promises` in Angular

- **Observables**:
  - Observables are lazy, meaning they only execute when subscribed to.
  - Observables can emit multiple values over time.
  - Observables can be canceled using the `unsubscribe` method.
  - Observables can be transformed and combined using operators.
  - Observables are used for handling streams of data, such as user input, server responses, and events.

- **Promises**:
  - Promises are eager, meaning they execute immediately when created.
  - Promises can only emit a single value.
  - Promises cannot be canceled once created.
  - Promises do not have built-in transformation or combination methods.
  - Promises are used for handling asynchronous operations that produce a single result, such as HTTP requests and file reads.


