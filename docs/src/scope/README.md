# Scope

In Angular, the scope of a variable determines where it can be accessed:

- **Global Scope**: Accessible anywhere in the application.
- **Local Scope**: Accessible only within a specific function or block.
- **Component Scope**: Accessible within a component and its child components.

### Global Scope

Accessible from anywhere in the application; defined outside any function or block.

Example :

```typescript
// Global Scope
let globalVariable = 'Global Variable';

function testFunction() {
  console.log(globalVariable); // Output: Global Variable
}

testFunction();
```

Example in Angular :

```typescript
import { Component } from '@angular/core';

// Global Scope
let globalVariable = 'Global Variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = globalVariable;
}
```

```html
<!--app.component.html-->
<h1>{{ title }}</h1>
```

### Local Scope

Accessible only within the function or block where defined.

Example :

```typescript
function testFunction() {
  // Local Scope
  let localVariable = 'Local Variable';
  console.log(localVariable); // Output: Local Variable
}

testFunction();
console.log(localVariable); // Error: localVariable is not defined
```

Example in Angular :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  testFunction() {
    // Local Scope
    let localVariable = 'Local Variable';
    console.log(localVariable); // Output: Local Variable
  }
}
```

```html
<!--app.component.html-->
<button (click)="testFunction()">Test Function</button>
```

### Component Scope

Accessible within the component and its children.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Component Scope
  title = 'app';
}
```

```html
<!--app.component.html-->
<h1>{{ title }}</h1>
```

