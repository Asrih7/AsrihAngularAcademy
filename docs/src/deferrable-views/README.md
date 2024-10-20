# Deferrable Views

Deferrable views can be used in component template to defer the loading of select dependencies within that template.

```typescript
@defer {
  <large-component />
}
```