# Security

The security of an Angular application is a critical aspect that needs to be considered during development. Here are some best practices to enhance the security of your Angular application:

## Preventing cross-site scripting (XSS)

Cross-site scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. To prevent XSS attacks in Angular applications, you can use the following best practices:

- Use Angular's built-in sanitization mechanisms to sanitize user input and prevent script injection.
- Avoid using unsafe methods like innerHTML and instead use Angular's data binding syntax to render dynamic content.
- Use Angular's built-in security features like Content Security Policy (CSP) to restrict the sources of scripts and other resources that can be loaded by your application.
- Enable strict mode in Angular templates to prevent template expressions from executing arbitrary code.
- Use Angular's HttpClient module to make HTTP requests and automatically sanitize responses to prevent XSS attacks.

## Angular's cross-site scripting security model

Angular provides a built-in security model to prevent cross-site scripting (XSS) attacks in applications. This security model includes the following features:

- Automatic sanitization of user input: Angular automatically sanitizes user input to prevent script injection and other security vulnerabilities.
- Strict mode in templates: Angular templates run in strict mode by default, which prevents template expressions from executing arbitrary code.
- Content Security Policy (CSP): Angular applications can use CSP to restrict the sources of scripts and other resources that can be loaded by the application.
- Trusted Types: Angular supports Trusted Types, a new web platform feature that helps prevent DOM-based XSS attacks by enforcing strict type checking on DOM APIs.

## Sanitization and security contexts

Angular provides a built-in sanitization mechanism to prevent cross-site scripting (XSS) attacks in applications. Sanitization is the process of cleaning user input to remove potentially dangerous content, such as script tags and event handlers. Angular uses security contexts to determine how to sanitize user input based on its intended use.

Angular provides the following security contexts for sanitization:

- HTML: Sanitizes user input for use in HTML contexts, such as rendering dynamic content in templates.
- Style: Sanitizes user input for use in CSS contexts, such as setting inline styles.
- Script: Sanitizes user input for use in script contexts, such as event handlers and script tags.
- URL: Sanitizes user input for use in URL contexts, such as setting href attributes.
- Resource URL: Sanitizes user input for use in resource URL contexts, such as loading external resources.

## Sanitization example

```typescript
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<div [innerHTML]="safeHtml"></div>`
})
export class AppComponent {
  safeHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const untrustedHtml = '<img src=x onerror=alert(1)>';
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
  }
}
```

## Direct use of the DOM APIs and explicit sanitization calls

Directly using the DOM APIs to manipulate the DOM can introduce security vulnerabilities in Angular applications. To prevent XSS attacks, avoid using unsafe methods like innerHTML and instead use Angular's built-in sanitization mechanisms to render dynamic content safely.

```typescript
import { Renderer2 } from '@angular/core';

constructor(private renderer: Renderer2, private sanitizer: DomSanitizer) { }

const div = this.renderer.createElement('div');
const unsafeContent = '<script>alert("XSS")</script>';
const sanitizedContent = this.sanitizer.sanitize(SecurityContext.HTML, unsafeContent);
this.renderer.setProperty(div, 'innerHTML', sanitizedContent);
document.body.appendChild(div);
```

## Trusting safe values

Angular provides a mechanism to trust safe values and bypass the built-in sanitization mechanisms when rendering trusted content. To trust a safe value, you can use the bypassSecurityTrustHtml, bypassSecurityTrustStyle, bypassSecurityTrustScript, bypassSecurityTrustUrl, and bypassSecurityTrustResourceUrl methods provided by the DomSanitizer service.

```typescript
const safeHtml = this.sanitizer.bypassSecurityTrustHtml('<b>Safe Content</b>');
```

## Content security policy

Content Security Policy (CSP) is a security feature that helps prevent cross-site scripting (XSS) attacks by restricting the sources of scripts and other resources that can be loaded by a web application. Angular applications can use CSP to define a policy that specifies which content is allowed to be loaded by the application.

To enable CSP in an Angular application, you can add a Content-Security-Policy header to the HTTP response from the server. The CSP header should include directives that restrict the sources of scripts, styles, images, fonts, and other resources that can be loaded by the application.

```typescript
Content-Security-Policy: default-src 'self'; script-src 'self' https://example.com; style-src 'self' https://example.com; img-src 'self' https://example.com; font-src 'self' https://example.com;
```

## Enforcing Trusted Types

Trusted Types is a new web platform feature that helps prevent DOM-based cross-site scripting (XSS) attacks by enforcing strict type checking on DOM APIs. Angular applications can use Trusted Types to ensure that only trusted values are passed to DOM APIs, preventing script injection and other security vulnerabilities.

To enable Trusted Types in an Angular application, you can configure the Trusted Types policy using the TrustedTypesConfig token provided by Angular. The policy can specify which types of values are considered trusted and enforce strict type checking on DOM APIs.

```typescript
import { InjectionToken } from '@angular/core';

export const TRUSTED_TYPES_CONFIG = new InjectionToken('TRUSTED_TYPES_CONFIG');

const trustedTypesConfig = {
  createPolicy: (name, policy) => {
    return policy;
  }
};
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TRUSTED_TYPES_CONFIG } from './trusted-types.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: TRUSTED_TYPES_CONFIG, useValue: trustedTypesConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use the AOT template compiler

The Angular Ahead-of-Time (AOT) template compiler compiles Angular templates at build time, which helps prevent cross-site scripting (XSS) attacks by statically analyzing the templates and generating optimized code. AOT compilation eliminates the need for the browser to compile templates at runtime, reducing the risk of template injection vulnerabilities.

To enable AOT compilation in an Angular application, you can use the ngc command to compile the application ahead of time. AOT compilation is recommended for production builds to improve performance, security, and compatibility with Content Security Policy (CSP) restrictions.

```bash
ng build --aot
```

## Server-side XSS protection

Server-side XSS protection is a security feature that helps prevent cross-site scripting (XSS) attacks by validating and sanitizing user input on the server before rendering it in the browser. To protect against XSS attacks, you can implement server-side input validation and sanitization to ensure that user input is safe and does not contain malicious content.

## HTTP-level vulnerabilities

Angular applications can be vulnerable to various HTTP-level attacks, such as cross-site request forgery (CSRF), cross-site scripting (XSS), and cross-site script inclusion (XSSI). To protect against these vulnerabilities, you can use Angular's built-in security features, such as HttpClient XSRF/CSRF protection, custom cookie/header names, and disabling XSRF protection.

## Cross-site request forgery

Cross-site request forgery (CSRF) is a security vulnerability that allows attackers to execute unauthorized actions on behalf of authenticated users. To prevent CSRF attacks in Angular applications, you can use Angular's built-in XSRF/CSRF protection mechanism to add a token to HTTP requests and validate it on the server.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## HttpClient XSRF/CSRF security

Angular's HttpClient module provides built-in support for cross-site request forgery (CSRF) protection using the XSRF/CSRF token mechanism. The HttpClientXsrfModule.withOptions method allows you to configure custom cookie and header names for the XSRF/CSRF token.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## Configure custom cookie/header names

Angular's HttpClient module allows you to configure custom cookie and header names for the XSRF/CSRF token using the HttpClientXsrfModule.withOptions method. By specifying custom names for the XSRF/CSRF token, you can enhance the security of your application and prevent CSRF attacks.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## Disabling XSRF protection

Angular's HttpClient module provides built-in support for cross-site request forgery (CSRF) protection using the XSRF/CSRF token mechanism. If you want to disable XSRF protection for specific requests, you can use the { withCredentials: true } option in the HttpClient request.

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

this.http.get('/api/data', { withCredentials: true });
```

## Cross-site script inclusion (XSSI)

Cross-site script inclusion (XSSI) is a security vulnerability that allows attackers to include external scripts in an application and execute malicious code. To prevent XSSI attacks in Angular applications, you can use Angular's built-in security features, such as HttpClient XSSI protection, to validate and sanitize external script responses.

## Auditing Angular applications
Auditing Angular applications is an essential step to identify and fix security vulnerabilities in the codebase. You can use various tools and techniques to audit Angular applications, such as security scanners, code reviews, penetration testing, and security best practices.

