var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function(done) {
  gulp.src("docs/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("docs/css"))
    .pipe(browserSync.stream());


  done();
});

gulp.task('serve', function(done) {

  browserSync.init({
    server: "docs/"
  });

  gulp.watch("docs/scss/*.scss", gulp.series('sass'));
  gulp.watch("docs/*.html").on('change', () => {
    browserSync.reload();
    done();
  });


  done();
});

gulp.task('default', gulp.series('sass', 'serve'));