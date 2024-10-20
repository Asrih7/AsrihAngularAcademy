# Renderer2

Renderer2 is a utility class that provides methods to manipulate and interact with the DOM (Document Object Model). It is used to perform operations such as creating, modifying, and removing elements, applying styles, and listening to events.

```typescript
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <button (click)="changeColor()">Change Color</button>
  `
})
export class ExampleComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  changeColor() {
    const button = this.el.nativeElement.querySelector('button');
    this.renderer.setStyle(button, 'background-color', 'red');
  }
}

```