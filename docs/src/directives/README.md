# Directives

Directives add behaviour to an existing DOM element or an existing component instance.

### Types of Directives

There are three types of directives in Angular:

1. **Structural Directives** - Structural directives are used to add or remove elements from the DOM based on a condition. They are denoted by an asterisk (*) before the directive name.

2. **Attribute Directives** - Attribute directives are used to change the appearance or behavior of an element. They are denoted by square brackets [] before the directive name.

3. **Custom Directives** - Custom directives are user-defined directives that add custom behavior to an element. They can be used to encapsulate complex behavior and reuse it across multiple components.

### Structural Directives

There are several built-in structural directives in Angular, including:

1. NgIf
2. NgFor
3. NgSwitch

**ngIf** - The `ngIf` directive is used to conditionally display elements based on the value of a given expression. It is commonly used to show or hide elements in the UI based on certain conditions.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showElement = true;
}
```

```html
<h1>ngIf Example</h1>
<div *ngIf="showElement">
  This element will only be displayed if showElement is true.
</div>
```


**ngFor** - The `ngFor` directive is used to iterate over a list of items and create a template for each item. It is commonly used to display a list of items in the UI.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
```

```html
<h1>ngFor Example</h1>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```



**ngSwitch** - The `ngSwitch` directive is used to conditionally display elements based on the value of a given expression. It is similar to a switch statement in JavaScript.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = 1;
}
```

```html
<h1>ngSwitch Example</h1>
<div [ngSwitch]="value">
  <div *ngSwitchCase="1">Case 1</div>
  <div *ngSwitchCase="2">Case 2</div>
  <div *ngSwitchCase="3">Case 3</div>
  <div *ngSwitchDefault>Default case</div>
</div>
```



### Attribute Directives

There are several built-in attribute directives in Angular, including:

1. NgClass
2. NgStyle
3. NgModel

**ngClass** - The `ngClass` directive is used to conditionally apply CSS classes to an element based on the value of a given expression. It is commonly used to apply styles to elements based on certain conditions.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHighlighted = true;
}
```

```html
<h1>ngClass Example</h1>
<div [ngClass]="{ highlighted: isHighlighted }">
  This element will have the 'highlighted' class if isHighlighted is true.
</div>
```

```css
.highlighted {
  background-color: yellow;
}
```



**ngStyle** - The `ngStyle` directive is used to conditionally apply inline styles to an element based on the value of a given expression. It is commonly used to apply dynamic styles to elements based on certain conditions.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color = 'red';
}
```

```html
<h1>ngStyle Example</h1>
<div [ngStyle]="{ color: color }">
  This element will have the color style set to the value of the color property.
</div>
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
  name: string;
}
```

```html
<h1>ngModel Example</h1>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" [(ngModel)]="name" name="name" />
</form>
```



### Custom Directives

Custom directives are user-defined directives that add custom behavior to an element. They can be used to encapsulate complex behavior and reuse it across multiple components.

Example :

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomDirectiveDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```html
<h1>Custom Directive Element</h1>
<div appCustomDirective>
  This element will have a yellow background when the mouse is over it.
</div>
```





### Other directives

There are several other built-in directives in Angular, including:

- **ngContainer**
- **ngTemplate**
- **ngContent**
- **ngTemplateOutlet**

**ngContainer** - The `ngContainer` directive is a simple container that doesn't generate any markup in the DOM. It's mainly used as a placeholder to group and structure content within Angular templates.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  condition = true;
}
```

```html
<h1>ngContainer Example</h1>
<div *ngIf="condition">
  <ng-container>
    <p>Content to be conditionally rendered</p>
    <p>More content...</p>
  </ng-container>
</div>
```



**ngTemplate** - The `ngTemplate` directive is used to define a reusable template block that can be used later within the same component or shared across components using the ngTemplateOutlet directive.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedTemplate: any;
}
```

```html
<h1>ngTemplate Example</h1>
<ng-template #myTemplate>
  <p>This is a template</p>
  <p>It can be reused in multiple places</p>
</ng-template>

<div>
  <ng-container *ngTemplateOutlet="selectedTemplate"></ng-container>
</div>

<button (click)="selectedTemplate = myTemplate">Load Template</button>
```



**ngContent** - The `ngContent` directive is used for content projection or transclusion. It allows you to create reusable components with customizable content.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})

export class ChildComponent {}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})

export class ParentComponent {}
```

```html
<!-- Parent Component -->
<app-child>
  <p>Content projected into the child component</p>
</app-child>
```

```html
<!-- Child Component Template -->
<div>
  <ng-content></ng-content>
</div>
```



**ngTemplateOutlet** - The `ngTemplateOutlet` directive is used to render a template defined using ngTemplate. It allows you to dynamically render a template within a component's template.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedTemplate: any;
}
```

```html
<h1>ngTemplateOutlet Example</h1>
<ng-container *ngTemplateOutlet="selectedTemplate"></ng-container>

<ng-template #template1>
  Template 1 content
</ng-template>

<ng-template #template2>
  Template 2 content
</ng-template>

<button (click)="selectedTemplate = template1">Load Template 1</button>
<button (click)="selectedTemplate = template2">Load Template 2</button>
```

