(function() {

  'use strict';

  var gulp   = require('gulp')
    , stylus = require('gulp-stylus')
    , nib    = require('nib')
    ;

  gulp.task('stylus', function() {
    gulp
      .src('./stylus/main.styl')
      .pipe(stylus({
        use: [nib()],
        sourcemap: { inline: true }
      }))
      .pipe(gulp.dest('./css'));
  });

  gulp.task('default', ['stylus'], function() {
    gulp.watch('./stylus/**/*.styl', ['stylus']);
  });

}());