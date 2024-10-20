# Pipes

A pipe takes in data as input and transforms it to a desired output.

Syntax:

```text
{{ data | pipe }}
```

```text
Expression | pipeOperator[:pipeArguments]

# Expression: is the expression, which you want to transform
# | : is the Pipe Character
# pipeOperator : name of the Pipe
# pipeArguments: arguments to the Pipe
```

### Built-in Pipes

There are several built-in pipes in Angular, including:

- **Date Pipe**
- **Uppercase Pipe**
- **Lowercase Pipe**
- **Currency Pipe**
- **Percent Pipe**
- **Slice Pipe**
- **Decimal/number Pipe**
- **JSON Pipe**
- **Async Pipe**

### Date Pipe

The `date` pipe is used to format a date value according to the locale rules specified in the application.

```ts
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = new Date();

  constructor(private datePipe: DatePipe) {}

  formatDate() {
    return this.datePipe.transform(this.date, 'shortDate');
  }
}
```

```html
<h1>Date Pipe Example</h1>
<p>{{ date | date: 'shortDate' }}</p>
```

```ts
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DatePipe],
})
export class AppModule {}
```



### Uppercase Pipe

The `uppercase` pipe is used to transform a string to uppercase.

```html
<h1>Upper Case Pipe Example</h1>
<p>{{ name | uppercase }}</p>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Manthan Ank';
}
```



### Lowercase Pipe

The `lowercase` pipe is used to transform a string to lowercase.

```html
<p>{{ name | lowercase }}</p>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Manthan Ank';
}
```


### Currency Pipe

The `currency` pipe is used to format a number as currency using the locale rules specified in the application.

```html
<h1>Currency Pipe Example</h1>
<p>{{ price | currency }}</p>
```

```ts
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  price = 100;

  constructor(private currencyPipe: CurrencyPipe) { }

  formatCurrency() {
    return this.currencyPipe.transform(this.price, 'USD', true);
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [CurrencyPipe],
})
export class AppModule {}
```



### Percent Pipe

The `percent` pipe is used to format a number as a percentage.

```html
<h1>Percent Pipe Example</h1>
<p>{{ percentage | percent }}</p>
```

```ts
import { PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  percentage = 0.5;

  constructor(private percentPipe: PercentPipe) {}

  formatPercentage() {
    return this.percentPipe.transform(this.percentage, '2');
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PercentPipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PercentPipe],
})
export class AppModule {}
```



### Slice Pipe

The `slice` pipe is used to create a new array or string containing a subset of the elements of the input array or string.

```typescript
<p>{{ ['apple', 'banana', 'orange', 'mango'] | slice:1:3 }}</p>
```



### Decimal/number Pipe

The `number` pipe is used to format a number as text. It can be used to format a number as a percentage, currency, or decimal number.

```html
<p>{{ 123456.78 | number:'3.2-3' }}</p>
```



### JSON Pipe

The `json` pipe is used to transform a JavaScript object into a JSON string.

```html
<p>{{data | json}}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data = { name: 'Manthan Ank', age: 25 };
}
```


### Async Pipe

The `async` pipe is used to subscribe to an Observable or Promise and return the latest value it has emitted.

```html
<p>{{data$ | async}}</p>
```

```typescript
// DataService.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  private data$: Observable<string>;

  constructor() {
    // Simulating an asynchronous data source
    this.data$ = of('Hello, async pipe!').pipe(
      // Simulating delay
      delay(2000)
    );
  }

  getData(): Observable<string> {
    return this.data$;
  }
}
```

```typescript
// ExampleComponent.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-example',
  template: '<div>{{ data$ | async }}</div>',
})
export class ExampleComponent {
  data$: Observable<string>;

  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
  }
}
```



### Impure Pipes

By default, Angular pipes are pure, meaning they are stateless and do not change unless the input value changes. However, you can create impure pipes by setting the pure property to false in the @Pipe decorator.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false,
})

export class ImpurePipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}
```

```html
<p>{{ data | impurePipe }}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data = 'Hello, world!';
}
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ImpurePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
```



