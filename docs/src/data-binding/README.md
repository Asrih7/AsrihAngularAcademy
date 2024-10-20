# Data binding

Data binding is a core feature of Angular that allows you to bind data between the component's class and the HTML template. There are two types of data binding in Angular:

There are two types of data binding in Angular:

- **One-way binding** - This allows for passing data from the component's class to the HTML template or vice-versa.

- **Two-way binding** - This allows for binding a property of an HTML element to a property in the component's class and vice-versa.

### One way binding

One-way binding allows for passing data from the component's class to the HTML template.

There are several ways to achieve one-way binding in Angular, including:

1. From Component to View
2. From View to Component

**1. From Component to View** - This allows for passing data from the component's class to the HTML template.

There are several ways to achieve one-way binding from the component to the view in Angular, including:

1. Interpolation
2. Property binding
3. Class binding
4. Style binding
5. Attribute binding

**Interpolation** - This allows for embedding expressions in the HTML template. It is denoted by double curly braces ({{}}).

Example :

```html
<h1>{{ firstText }} {{ lastText }}</h1>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstText = 'Interpolation';
  lastText = 'Example';
}
```



**Property binding** - This allows for binding a property of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```html
<h1 [innerText]="title"></h1>

<button [disabled]="isDisabled">I am disabled</button>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Property Binding Example';

  isDisabled = true;
}
```



**class binding** - This allows for binding a class of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
```

```html
<div [class.active]="isActive">This div is active.</div>
<button (click)="toggleActive()">Toggle Active</button>
```

```css
.active {
  background-color: yellow;
}
```



**style binding** - This allows for binding a style of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  backgroundColor = 'red';
  textColor = 'white';
}
```

```html
<div [style.background-color]="backgroundColor">
  <h1 [style.color]="textColor">Hello, world!</h1>
</div>
```



**attribute binding** - This allows for binding an attribute of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageUrl = 'https://example.com/image.jpg';
  imageAlt = 'Example image';
  isButtonDisabled = false;
}
```

```html
<img [attr.src]="imageUrl" [attr.alt]="imageAlt">
<button [attr.disabled]="isButtonDisabled">Click me</button>
```



**b. From View to Component** - This allows for passing data from the HTML template to the component's class.

There are several ways to achieve one-way binding from the view to the component in Angular, including:

1. Event binding
2. ngModel

**Event binding** - This allows for binding an event of an HTML element to a method in the component's class. It is denoted by parentheses (()).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  onClick() {
    console.log('Button was clicked');
  }
}
```

```html
<h1>Event Binding Example</h1>
<button (click)="onClick()">Click me</button>
```



**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';
}
```

```html
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

**Remeber💡** :

The (click) calls the specified function when a user clicks on the given element (in your example, when a user clicks on a row).

The (change) event binds to HTML's onChange event. This event is fired for `<input>`, `<select>`, and `<textarea>` elements when a change to the element's value is committed by the user.

The (change) event can also be specifically implemented by other Angular components. It is generally implemented on components where the contents of the component are changed by the user.

[☝️Source of Explaination](https://stackoverflow.com/a/51127794/14292971)

### Two ways binding

Two-way binding allows for binding a property of an HTML element to a property in the component's class and vice-versa. It is denoted by `[(ngModel)]`.

There are several ways to achieve two-way binding in Angular, including:

1. ngModel
2. ngModelChange
3. change event

**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
}
```

```html
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```




**ngModelChange** - The `ngModelChange` event is emitted when the value of an input element bound to `ngModel` changes. It can be used to perform additional logic when the value changes.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';

  onNameChange(value: string) {
    console.log('Name changed to:', value);
  }
}
```

```html
<input [(ngModel)]="name" (ngModelChange)="onNameChange($event)" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```



**change event** - The `change` event is emitted when the value of an input element changes. It can be used to perform additional logic when the value changes.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';

  onNameChange(value: string) {
    console.log('Name changed to:', value);
  }
}
```

```html
<input [(ngModel)]="name" (change)="onNameChange($event.target.value)" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```




