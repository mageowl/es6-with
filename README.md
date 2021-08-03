## The `with` keyword compatable with es6

```javascript
import wth from "./withes6.js"

const randomNumber = (min, max) => return wth(Math, (floor, random) => {
  return floor(random() * (max - min)) + min
})
```

A workaround to the `with` keyword.
[Why shouldn't I use `with`?](https://dev.to/mistval/javascript-s-forgotten-keyword-with-48id)
