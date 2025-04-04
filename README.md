
# GOODFOOD

[Live Site](https://goodfood-jade.vercel.app/)

### Running the app
- `npm i`
- `npm run dev`

### Description
Goodfood is a simple dashboard for a food company to track useful metrics.

### Technologies used
- React
- Typescript
- Tailwind
- Rechart



### Approach
The core architecture for this project was one that implemented separation of Concerns. In this, component hooks were implemented to separate the business logic of a component from the UI. Unless the component is dumb (i.e only UI), each component has two main parts:
- UI component, for rendering JSX
- component hook, hook where all data is kept/retrieved/determined and eventually returned to be used in the UI component.
The folder structure thus looks like:
``` 
    /Component
      /__tests__
        index.test.tsx
      /hooks
        /useComponent
          /__tests__
            index.test.ts
          index.ts
      index.tsx
```

Hooks are structured to return `data` and `actions`.
```
  const {
          data: { orders },
          actions: { getOrders }
        } = useComponent()
```

