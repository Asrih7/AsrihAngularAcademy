# Angular Animations

Angular's animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties includes positions, sizes, transforms, colors, borders etc. The Angular modules for animations are @angular/animations and @angular/platform-browser.

### Installing Angular Animations

```bash
npm install @angular/animations
```

### Importing Angular Animations

To use Angular animations in an Angular application, you need to import the BrowserAnimationsModule module in the app.module.ts file.

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

### Animation Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AppComponent {
  show = false;

  toggle() {
    this.show = !this.show;
  }
}
```

```html
<button (click)="toggle()">Toggle</button>
<div *ngIf="show" @fadeInOut>
  <h1>Angular Animation Example</h1>
</div>
```

