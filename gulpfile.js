'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

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

gulp.task('minifyScripts', function(done) {
  gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
    done();
});

// gulp.task("default", ["hello"], function() {
//   console.log("This is the default task!");
// });
