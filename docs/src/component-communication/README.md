# Component Communication

Passing data between Angular components using Input/Output decorators, EventEmitter, and services.

### Parent to Child

**Input Decorator** - The `@Input` decorator is used to pass data from a parent component to a child component. It allows the parent component to bind a property to the child component.

Example :

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Input() message: string;
}
```

```html
<!--child.component.html-->
<p>{{ message }}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  message = 'Hello from parent component';
}
```

```html
<!--parent.component.html-->
<app-child [message]="message"></app-child>
```



### Child to Parent

**Output Decorator** - The `@Output` decorator is used to pass data from a child component to a parent component. It allows the child component to emit events that the parent component can listen to.

Example :

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child component');
  }
}
```

```html
<!--child.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
```

```html
<!--parent.component.html-->
<app-child (messageEvent)="receiveMessage($event)"></app-child>
<p>{{ message }}</p>
```




