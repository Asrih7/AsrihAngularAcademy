# Siblings to Siblings Communication

**Using Services** - Services are a way to share data and functionality between components in Angular. You can create a service that holds the data and methods that need to be shared between components.

Example 1 :

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  message: string;

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  message: string;

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.setMessage('Hello from sibling1 component');
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;

  constructor(private dataService: DataService) {}

  receiveMessage() {
    this.message = this.dataService.getMessage();
  }
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
<button (click)="receiveMessage()">Receive Message</button>
```



Example 2 :

**Using RxJS Subjects** - RxJS Subjects are a way to share data and events between components in Angular. You can create a Subject that emits events and subscribe to those events in the components.

```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  message = new Subject<string>();

  setMessage(message: string) {
    this.message.next(message);
  }
}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  message: string;

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.setMessage('Hello from sibling1 component');
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.message.subscribe(message => {
      this.message = message;
    });
  }
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
```

Example 3 :

**Using ViewChild and ViewChildren** - ViewChild and ViewChildren are a way to access child components in Angular. You can use ViewChild to access a single child component and ViewChildren to access multiple child components.

```typescript
import { Component, ViewChild } from '@angular/core';
import { Sibling2Component } from './sibling2.component';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  @ViewChild(Sibling2Component) sibling2: Sibling2Component;

  sendMessage() {
    this.sibling2.message = 'Hello from sibling1 component';
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
<app-sibling2></app-sibling2>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
```


