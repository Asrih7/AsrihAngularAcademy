# HTTP Client

The `HttpClient` service is used to make HTTP requests to a server. It provides methods for making GET, POST, PUT, DELETE, and other types of requests.

```ts
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

getData() {
  return this.http.get('https://api.example.com/data');
}
```

