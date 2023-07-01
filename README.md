# front-end-for-maven

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Change IP Address of Back-end Server and Port
You will need to change the ip of both the front-end and back-end server to your own ip address. You will also need to change the port of the back-end server to the port you are using. 
The front-end server will use port 8081 by default. 
The backen-end server will use port 8080 by default.

### Project Structure
```
front-end-for-maven
├─ 📁public
│  ├─ 📄favicon.ico
│  └─ 📄index.html
├─ 📁src
│  ├─ 📁assets
│  │  └─ 📄logo.png
│  ├─ 📁components
│  │  ├─ 📁CategoryCard
│  │  │  └─ 📄CategoryCard.vue
│  │  ├─ 📁ProductCard
│  │  │  └─ 📄ProductCard.vue
│  │  └─ 📁UserCard
│  │     └─ 📄UserCard.vue
│  ├─ 📁router
│  │  └─ 📄index.js
│  ├─ 📁views
│  │  ├─ 📁CategoryView
│  │  │  └─ 📄CategoryView.vue
│  │  ├─ 📁ProductView
│  │  │  └─ 📄ProductView.vue
│  │  └─ 📁UserView
│  │     └─ 📄UserView.vue
│  ├─ 📄App.vue
│  └─ 📄main.js
├─ 📄.browserslistrc
├─ 📄.editorconfig
├─ 📄.eslintrc.js
├─ 📄.gitignore
├─ 📄babel.config.js
├─ 📄jsconfig.json
├─ 📄package.json
├─ 📄README.md
├─ 📄vue.config.js
└─ 📄yarn.lock
```