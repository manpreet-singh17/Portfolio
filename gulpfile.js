var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');

gulp.task('default', function() {
    console.log('done');
});

gulp.task('minify-css', function() {
    gulp.src('./sass/*.css')
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-html', function() {
    gulp.src('./index.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
});