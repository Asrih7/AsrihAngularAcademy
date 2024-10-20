# Angular Material

Angular Material is a UI component library for Angular applications that provides a set of reusable and customizable components, such as buttons, cards, dialogs, and menus. It is built on top of the Angular CDK (Component Dev Kit) and follows the Material Design guidelines.

### Installing Angular Material

```bash
ng add @angular/material
```

### Importing Angular Material

To use Angular Material in an Angular application, you need to import the required modules in the app.module.ts file.

```typescript
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

