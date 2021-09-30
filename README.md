# vue-in-react-directly
For more information about why this repo is created or other ways to use Vue.js inside the React.js codebase, please have look at this [article](https://medium.com/@aliafsah1988/how-to-usevue-js-inside-react-js-code-base-properly-3380f09b60f7).


## Load Vue components directly with webpack
We can load our components directly inside the main application using webpack. So basically we will have .vue files beside our other types of files.
### Things to consider:
* Still we should include Vue.s in our project (as script to our html file or just install it via npm/yarn).
* Since we are using .vue files directly in our application, we need to load them via webpack, so we config webpack. And they will be a part of our bundle as mentioned above.
### Pros
* We can use features like Vuex and pass them via main codes base the main vue instance. So it has a good flexibility.
* There is no need for any extra build inside the vue project, since we are using .vue files directly inside our main code base and they are getting build via webpack there (one step build in one place).
### Cons
* We couldn’t find a way to use TypeScript properly in both code bases (if you know a solution, I would love to hear that 🙂 )
* Linting could be a bit tricky since we have both react and vue components in our code base.

