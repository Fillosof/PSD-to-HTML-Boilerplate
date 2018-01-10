md src\fonts
md src\img
md src\js
md src\js\patrials
@echo off > src\js\main.js
md src\style
md src\style\patrials
@echo off > src\style\main.sass
md src\template
@echo off > index.html

call npm i
call npm init
call npm install gulp --save-dev
call npm install gulp-autoprefixer --save-dev
call npm install gulp-minify-css --save-dev
call npm install browser-sync --save-dev
call npm install gulp-imagemin --save-dev
call npm install imagemin-pngquant --save-dev
call npm install gulp-uglify --save-dev
call npm install gulp-sass --save-dev
call npm install gulp-sourcemaps --save-dev
call npm install gulp-rigger --save-dev
call npm install gulp-watch --save-dev
call npm install gulp-inject --save-dev
call npm install bootstrap-sass --save-dev


pause
