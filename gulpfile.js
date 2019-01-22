'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task("concatScripts", function(done) {
  gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('js'));
  done();
});

// gulp.task("default", ["hello"], function() {
//   console.log("This is the default task!");
// });
