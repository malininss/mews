var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function(done) {
  gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());


  done();
});

gulp.task('serve', function(done) {

  browserSync.init({
    server: "src/"
  });

  gulp.watch("src/scss/*.scss", gulp.series('sass'));
  gulp.watch("src/*.html").on('change', () => {
    browserSync.reload();
    done();
  });


  done();
});

gulp.task('default', gulp.series('sass', 'serve'));