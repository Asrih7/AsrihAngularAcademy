# PWA

Progressive Web Apps (PWAs) are web applications that provide a native app-like experience to users, including offline support, push notifications, and home screen installation. Angular provides built-in support for creating PWAs using the @angular/pwa package.

### Installing PWA

```bash
ng add @angular/pwa
```

### Configuring PWA

To configure the PWA settings, you can modify the ngsw-config.json file in the src/ directory.

```json
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }
  ]
}
```

### Building PWA

To build the PWA, you can run the ng build --prod command with the --configuration=production flag.

```bash
ng build --prod --configuration=production
```

### Service Worker

The service worker is a script that runs in the background of the browser and handles tasks such as caching assets, intercepting network requests, and providing offline support. Angular's service worker is generated automatically when you create a PWA using the @angular/pwa package.

### Features of PWA

**Offline Support** - The service worker caches assets and intercepts network requests to provide offline support for the application.

**Push Notifications** - The service worker can receive push notifications from the server and display them to the user.

**Background Sync** - The service worker can perform background sync tasks, such as sending data to the server when the network connection is available.

**Home Screen Installation** - The service worker can prompt the user to install the application on the home screen for quick access.

