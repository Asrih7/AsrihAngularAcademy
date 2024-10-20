# Destroy Ref

The DestroyRef provider is a utility that allows Angular components to register cleanup callbacks that are executed when the component is destroyed. This is useful for cleaning up resources, such as subscriptions, timers, or other resources that need to be released when the component is no longer in use.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestroyRef } from '@angular/core/testing';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit, OnDestroy {

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    // Register a destroy callback with the DestroyRef provider.
    this.destroyRef.register(() => {
      // Do any cleanup tasks here.
    });
  }

}
```