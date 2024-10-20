# Route Parameters

Route parameters are used to pass data to a route in Angular. They allow you to create dynamic routes that can be customized based on user input or other factors. Route parameters are defined in the route configuration and can be accessed in the component associated with the route.

There are three types of route parameters in Angular:

***Path Parameters***:

Path parameters are used to extract data from the URL path. They are denoted by placing a colon (":") before the parameter name in the route configuration. Path parameters are part of the route path and can be accessed in the component associated with the route. For example:

```typescript
{ path: 'users/:id', component: UserComponent }
```

In this example, the ":id" parameter is a path parameter. The UserComponent can retrieve the value of the ":id" parameter from the URL and use it to fetch user data.

***Query Parameters***:

Query parameters are used to pass data as key-value pairs in the URL query string. They are denoted by placing a question mark ("?") after the route path, followed by the parameter name and value. Query parameters are not part of the route path but can be accessed in the component associated with the route. For example:

```typescript
{ path: 'search', component: SearchComponent }
```

In this example, the SearchComponent can access query parameters like "/search?query=angular" or "/search?query=react" and use them to perform a search operation.

***Optional Parameters***:

Optional parameters are used to define route parameters that are not required. They are denoted by placing a question mark ("?") after the parameter name in the route configuration. Optional parameters can be present or absent in the URL, and the component associated with the route can handle both cases. For example:

```typescript
{ path: 'products/:id/:category?', component: ProductComponent }
```

In this example, the ":category" parameter is optional. The ProductComponent can handle URLs like "/products/123" or "/products/123/electronics" based on the presence of the ":category" parameter.
