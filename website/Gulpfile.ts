"use-strict";

// Gulp Imports
const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const mminifyCSS = require("gulp-uglify");
const rename = require("gulp-rename");
const changed = require("gulp-changed");


// Variables
const SCSS_PATH: string = "";
//Destination
const setCompiledFileDestination: string = "./dist/css";

/*=======================================================================================================*
  |---------------------------------------- Gulp Tasks -------------------------------------------------|
 *=======================================================================================================*/

//Compiles the `SCSS` files 
gulp.task("compile_scss", () => {
  gulp
    .src(SCSS_PATH)
    .pipe(gulpSass().on("error", gulpSass.logError))
    .pipe(mminifyCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(changed(setCompiledFileDestination))
    .pipe(gulp.dest(setCompiledFileDestination));
});

//Detect changes in `SCSS` files 
gulp.task("watch-sass", () => {
  gulp.watch(SCSS_PATH, ["compile_scss"]);
});

//Runs Task
gulp.task("default", ["watch_scss"]);
