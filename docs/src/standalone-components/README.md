# Standalone Components

A standalone component is a type of component which is not part of any Angular module. It provides a simplified way to build Angular applications.

Example Code for a Standalone Component
```typescript
// standalone.component.ts
import { Component } from '@angular/core';

// Define the standalone component
@Component({
  selector: 'app-standalone',
  template: `
    <div>
      <h1>Welcome to the Standalone Component!</h1>
      <p>This component is not part of any Angular module.</p>
    </div>
  `,
  styles: [`
    div {
      border: 2px solid #007bff;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
    }
  `],
  standalone: true // Marking the component as standalone
})
export class StandaloneComponent {}
```

Using the Standalone Component
To use this standalone component, you can include it directly in your main application component or any other component without the need for a module:
```typescript
// app.component.ts
import { Component } from '@angular/core';
import { StandaloneComponent } from './standalone.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Main Application Component</h1>
      <app-standalone></app-standalone> <!-- Using the standalone component -->
    </div>
  `,
  styles: []
})
export class AppComponent {}
```

Main Application Module
Even though the standalone component does not belong to an Angular module, you still need to bootstrap your main application module. Here’s how you can do that:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StandaloneComponent } from './standalone.component'; // Import the standalone component

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StandaloneComponent // Include the standalone component here
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Summary
In this example:

We created a standalone component named StandaloneComponent that displays a simple message.
The component is marked with standalone: true, indicating it can be used independently.
We demonstrated how to use the standalone component within the main application component.
If you have any further questions or need more examples, feel free to ask!