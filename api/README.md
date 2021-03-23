# API Route

In order to implement API route in NuxtJs, you need to do the following things:

Create an api folder under root directory

Register api route in `nuxt.config.js`
```javascript
serverMiddleware: [
  '~/api'
]
```

Create an index.js file, this will be the entry point

Inside the `index.js`, import necessary packages such as express, axios, etc just like regular nodejs/express app

this should be all, actually you can migrate / move your nodejs/express easily into nuxtjs project with a little tweak which is amazing !!!

