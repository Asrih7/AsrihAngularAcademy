# View Encapsulation

Controls how styles are applied to components. By default, Angular uses Emulated View Encapsulation, scoping styles to the component.

### Emulated View Encapsulation

Default mode in Angular, emulating shadow DOM to scope styles to the component.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
}
```



### Shadow DOM View Encapsulation

Uses native shadow DOM to encapsulate styles within the component, preventing them from affecting other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'app';
}
```



### None View Encapsulation

Disables encapsulation; styles can affect other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
```





