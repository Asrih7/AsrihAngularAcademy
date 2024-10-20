# PrimeNG

PrimeNG is a popular UI component library for Angular applications that provides a set of rich and customizable components, such as data tables, calendars, dialogs, and charts. It is built on top of the PrimeFaces library and follows the PrimeNG design guidelines.

### Installing PrimeNG

```bash
npm install primeng
```

### Importing PrimeNG

To use PrimeNG in an Angular application, you need to import the required styles and modules in the angular.json file.

```json
// angular.json
"styles": [
  "node_modules/primeng/resources/themes/saga-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "src/styles.css"
]
```

```css
/* styles.css */
@import 'primeng/resources/themes/saga-blue/theme.css';
@import 'primeng/resources/primeng.min.css';
```

