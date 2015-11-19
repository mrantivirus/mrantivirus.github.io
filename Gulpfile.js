var browserify = require("gulp-browserify");
var gulp = require('gulp');

gulp.task('scripts', function () {
    gulp.src([
            'src/*.js',
        ])
        .pipe(browserify({
            debug: true,
            transform: [ 'babelify' ]
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['scripts']);