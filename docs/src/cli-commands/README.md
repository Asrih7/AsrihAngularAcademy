# CLI Commands

Installing Angular CLI

```bash
npm install -g @angular/cli
```

Help

```bash
ng help
```

Check version

```bash
ng version
```

Create, build, and serve a new, basic Angular project cli command

```bash
ng new my-first-project
cd my-first-project
ng serve
```

Generating new application

```bash
ng new app-name
```

Create new app without installing cli

```bash
npm init @angular app-name
```

Component

```bash
ng g c component-name
ng generate component component-name
```

Adding External libraries

```bash
ng add
```

Build

```bash
ng build
```

Running project

```bash
ng serve
```

Run project on particular port

```bash
ng serve --port=portname
// example
ng serve --port=3000
```

Run project and open the url in default browser

```bash
ng  serve --open
```

Update

```bash
ng update
```

Directive

```bash
ng generate directive component-name
ng g directive component-name
```

Module

```bash
ng generate module module-name
ng g m module-name
```

Service

```bash
ng generate service component-name
ng g service component-name
```

Routing Module

```bash
ng g module module-name --routing
ng g m module-name --routing
```

Component with module, routing module

```bash
ng generate module component-name --route component-name --module app.module
```

Pipe

```bash
ng g pipe pipe-name
```

Enum

```bash
ng g enum some-enum
```

Class

```bash
ng g cl my-class
```

Interface

```bash
ng g interface my-interface
```

Guard

```bash
ng g guard guard-name
```

Multiple Projects in one Angular App

```bash
ng generate application sub-app-name

ng new app-name --create-application=false
```

Generate environments

```bash
ng generate environments
```