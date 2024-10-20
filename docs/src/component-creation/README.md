# Component Creation

### Using Angular CLI

```bash
ng generate component [component-name]

# or

ng g c [component-name]
```

### Manual Creation

**Step 1** - Create a new folder for the component inside the `src/app` folder.

```bash
src/app/[component-name]
```

**Step 2** - Create a new TypeScript file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.ts
```

**Step 3** - Create a new HTML file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.html
```

**Step 4** - Create a new CSS file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.css
```

**Step 5** - Import the Component class from the `@angular/core` module.

```typescript
import { Component } from '@angular/core';
```

**Step 6** - Decorate the class with the `@Component` decorator.

```typescript
@Component({
  selector: 'app-[component-name]',
  standalone: true,
  templateUrl: './[component-name].component.html',
  styleUrls: ['./[component-name].component.css']
})
```

If you want to create a non-standalone component, set the `standalone` property to `false`. The standalone component is enabled by default in Angular v17 and later.

**Step 7** - Define the selector, template, and styles for the component.

```text
selector - The selector for the component.
templateUrl - The URL of the HTML template for the component.
styleUrls - An array of URLs of the stylesheets for the component.
```

**Step 8** - Export the class.

```typescript
export class [ComponentName]Component {
  // Component logic here
}
```

**Step 9** - Import the component class in the `app.module.ts` file.

```typescript
import { [ComponentName]Component } from './[component-name]/[component-name].component';
```

**Step 10** - Add the component to the `declarations` array in the `@NgModule` decorator.

```typescript
declarations: [
  AppComponent,
  [ComponentName]Component
]
```

If you created a standalone component, `app.module.ts` file is not required. You can import the component in the `app.component.ts` file.
as shown below.

```typescript
import { [ComponentName]Component } from './[component-name]/[component-name].component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [[ComponentName]Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'app';
}
```

**Step 11** - Use the component selector in the HTML template.

```typescript
<app-[component-name]></app-[component-name]>
```

**Step 12** - Run the application using the `ng serve` command.

```bash
ng serve

# or

ng serve --open
```

### Example

**Creating the component files (Version 16 and earlier)** -

```bash
//test-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})

export class TestComponent {
  // Component logic here
}
```

```html
<!--component.component.html-->
<h1>Test Component</h1>
```

```css
/*component.component.css*/
h1 {
  color: red;
}
```

**Creating the component files (Version 17 and later)** -

```bash
//test-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponent {
  // Component logic here
}
```

You can create a standalone component by setting the `standalone` property to `true`. The standalone component is enabled by default in Angular v17 and later. You can disable the standalone component by setting the `standalone` property to `false` in the `@Component` decorator of the component. If you disable the standalone component, you need to import the component in the `app.module.ts` file. If you created a non-standalone component, you will see no standalone property in the `@Component` decorator.

```html
<!--test-component.component.html-->
<h1>Test Component</h1>
```

```css
/*test-component.component.css*/
h1 {
  color: red;
}
```

**Importing the component in the app.module.ts file (Version 16 and earlier)** -

```typescript
//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { TestComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Importing the component in the app.module.ts file (Version 17 and later without standalone component)** -

```typescript
//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In version 17 and later, the standalone component is enabled by default. You can disable the standalone component by setting the `standalone` property to `false`. Inside app folder, `app.config.ts` file is created by default.

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
```

You can import the component in the `app.component.ts` file and use the component selector in the HTML template.

```typescript
//app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
```

```html
<!--app.component.html-->
<app-test-component></app-test-component>
```

**Creating the inline Template & StyleUrls** -

```typescript
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: '<h1> {{title}} works </h1>',
  styles: ['h1 { font-weight: bold; }']
})
export class AppComponent {
  title = 'app';
}
```


