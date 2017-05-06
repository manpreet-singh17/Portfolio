var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

/*======= task WATCHER=========*/
gulp.task('default', function() {
    //console.log('done');
    gulp.watch('stylesheets/**/*.scss', ['sassToCss']);
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

/*================SASS to CSS task=============== */
gulp.task('sassToCss', function() {
    gulp.src('stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(gulp.dest('/css/sass'));
});