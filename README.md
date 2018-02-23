## Commands
First make sure your local dependencies are up to date,
```
yarn install
```
then start the dev server.
```
yarn run server
```
This will open a webpage and it will automatically reload when you save a change to a file.
## Structure
* html files - top level
* js files - src/js
* css files - src/css
## Guidelines
Let's try to stick to one script per page. So if we're on the recipe-finder page it should load the recipe-finder script.
```
<script type="module" src="./src/js/recipe-finder.js"></script>
```
NOTICE: type="module" -- this will allow us to import and export data across js files. Additionally use relative pathnames
```
"./src/js/recipe-finder.js"
```
instead of 
```
"src/js/recipe-finder.js"
```
