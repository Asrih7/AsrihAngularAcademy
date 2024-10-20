# Components

Component is the main building block of an Angular Application. It is a TypeScript class that interacts with the HTML template and provides the data and logic to the view.

### Three main building blocks

There are three main building blocks of an Angular component:

- Template
- Class
- Metadata

**Template** - Defines the layout and content of the View.

**Class** - Class provides the data & logic to the View.

**MetaData** - Metadata Provides additional information about the component to the Angular.

### Component metadata properties

There are several properties that can be defined in the component metadata:

- Selector
- Providers
- Styles
- StyleUrls
- Template
- TemplateUrl

**Selector** - Defines the element name or CSS selector that identifies the component in the HTML template.

```typescript
selector: 'app-root'
```

**Providers** - Defines the providers of the component's dependencies.

```typescript
providers: [MyService]
```

**styles** - Defines the inline styles for the component.

```typescript
styles: ['h1 { color: red; }']
```

**styleUrls** - Defines an array of URLs of the stylesheets for the component.

```typescript
styleUrls: ['./app.component.css']
```

**template** - Defines the HTML template for the component.

```typescript
template: '<h1>My Component</h1>'
```

**templateUrl** - Defines the URL of the HTML template for the component.

```typescript
templateUrl: './app.component.html'
```

