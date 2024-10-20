# Configuration

### Prerequisites

- Node.js
- NPM
- Angular CLI

### Installation

Install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

If you have already installed the Angular CLI, you can update it to the latest version using the following command:

```bash
npm install -g @angular/cli@latest
```

Check version

```bash
ng version
```

Create a new Angular project: (Replace `[PROJECT NAME]` with your project name)

```bash
# with standalone component
ng new [PROJECT NAME]

# without standalone component
ng new [PROJECT NAME] --standalone=false
```

**Note**: In version v17 and later, the standalone component is default enabled. In version v16 and earlier, the standalone component is disabled by default. You can enable or disable the standalone component using the `--standalone` flag. (In this repository, an example repository is created with the latest version of Angular.)

Navigate to the project directory:

```bash
cd [PROJECT NAME]
```

Run the application:

```bash
ng serve
```

Open the browser and navigate to `http://localhost:4200/`.

Project structure:

```bash
[PROJECT NAME]
├── node_modules
├── public
│   ├── favicon.ico
│   └── ...
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── ...
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── ...
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
├── tslint.json
└── ...
```


