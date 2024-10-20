# Meta tags
Meta Tags are HTML elements used to provide metadata about a web page. They are placed in the head section of an HTML document and are not displayed on the page. Instead, they provide information to browsers and search engines, such as page descriptions, keywords, author information, and viewport settings. Meta tags can enhance SEO and control how content appears in search engine results and social media previews.

Title Service
Title Service in Angular is a service provided by @angular/platform-browser that allows you to get and set the title of the current HTML document dynamically. This service is crucial for improving SEO and providing context to users when they navigate through different pages of a single-page application (SPA). It helps in managing the browser tab title according to the content being viewed.

Key Methods of the Meta Service
addTag(): Adds a new meta tag to the document.
addTags(): Adds multiple meta tags at once.
getTag(): Retrieves a meta tag based on a specified selector.
updateTag(): Updates an existing meta tag.
removeTag(): Removes a specified meta tag from the document.
These definitions should help clarify the purpose and usage of meta tags and the Title Service in Angular! Let me know if you need anything else.
### Title Service

```typescript
import { BrowserModule, Title } from '@angular/platform-browser';
```

```typescript
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
export class TitleComponent implements OnInit {
  constructor(private title:Title) { }
}
```

```typescript
ngOnInit() {
  this.title.setTitle("Learn Angular")
}
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Title, MetaDefinition } from '@angular/platform-browser';
 
@Component({
  template: `<h1>App Component</h1>`
})
export class AppComponent implements OnInit {
  title = 'App Component';
 
  constructor(private title:Title){
  }
 
  ngOnInit() {
    this.title.setTitle("Learn Angular")
  }
 
}
```

### Title Service Example

```typescript
// app.module.ts
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
 
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title Service Example';
 
  constructor(private titleService:Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
```

```html
<!-- app.component.html -->
<h1>Title Service Example</h1>
 
<ul>
  <li><a [routerLink]="['/home']">Home</a> </li>
</ul>
 
<router-outlet></router-outlet>
```

```typescript
// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `<h1>Home Component</h1>`
})
export class HomeComponent implements OnInit {
  title = 'Home Component Title';
 
  constructor(private titleService:Title){
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
 
}
```

### Dynamic Title

```typescript
// app.module.ts
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
 
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

const routes: Routes = [
  {path: '', component:HomeComponent, data : {title:'Title for Home Component'}},
  {path: 'parent', component:ParentComponent, data : {title:'Title for Parent Component'},
    children: [
      { path: 'child', component:ChildComponent, data : {title:'Title for Child Component'}}
    ]
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private titleService: Title
  ) { }
 
  ngOnInit() {
 
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {
 
        var rt = this.getChild(this.activatedRoute)
 
        rt.data.subscribe(data => {
          console.log(data);
          this.titleService.setTitle(data.title)})
      })
 
  }
 
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }
}
```

```html
<!-- app.component.html -->
<h1>Dynamic Title Example</h1>
 
<ul>
  <li><a routerLink="">Home</a> </li>
  <li><a [routerLink]="['/parent']">Parent</a> </li>
  <li><a [routerLink]="['/child']">Child</a> </li>
</ul>
 
<router-outlet></router-outlet>
```

```typescript
// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Home Component</h1>`
})
export class HomeComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

```typescript
// parent.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Parent Component</h1>
  <router-outlet></router-outlet>
  `
})
export class ParentComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

```typescript
// child.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Child Component</h1>`
})
export class ChildComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

### Meta Service

```typescript
import { BrowserModule, Meta } from '@angular/platform-browser';
```

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
 
@Component({
  template: `<h1>App Component</h1>`
})
export class AppComponent implements OnInit {
  title = 'App Component';
 
  constructor(private metaService:Meta){
  }
 
  ngOnInit() {
    this.metaService.addTag( { name:'description',content:"Article Description"});
  }
 
}
```

Adding Tags with addTag() & addTags()

```typescript
this.metaService.addTag( { name:'description',content:"Article Description"});
```

```typescript
this.metaService.addTag( 
  { name: 'description', content: 'Article Description' },
  { name: 'robots', content: 'index,follow' },
  { property: 'og:title', content: 'Content Title for social media' }
);
```

Reading the Tags with getTag()

```typescript
this.metaService.getTag("name='description'")
```

Update the Tag with updateTag()

```typescript
this.metaService.updateTag( { name:'robots', content:'index, nofoloow'},"name='robots'");
```

Removing the Tag with removeTag()

```typescript
this.metaService.removeTag("name='robots'");
```

