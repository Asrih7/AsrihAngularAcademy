# Services

Services are used to encapsulate reusable functionality that can be shared across components. They are used to fetch data from a server, perform calculations, or interact with external services.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```



### Injectable Decorator

The `@Injectable` decorator is used to define a service class that can be injected into other components or services.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```



### Dependency Injection

Dependency injection is a design pattern used to create objects and manage their dependencies. It allows you to inject dependencies into a class rather than creating them within the class.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```



### Providers

Providers are used to define dependencies that are injected into components, directives, pipes, and services. They are defined in the `@NgModule` decorator of the root module or feature modules.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
})

export class AppModule {}
```


