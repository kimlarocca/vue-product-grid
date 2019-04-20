# nuts

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
npm run build
# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Authorization Token

The authorization token expires every 48 hours, so you may need to change this line to get it to work:

"Authorization": "Bearer GpCQeQA7qIGh3Sp-XHZJTAE0qqfeGBVP"

(in App.vue on line 48)