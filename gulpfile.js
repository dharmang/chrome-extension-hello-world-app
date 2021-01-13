// node.js Packages / Dependencies
const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');


var paths = {
    src: 'src',
    build: 'build'
}

gulp.task('copy-to-dest', () => {
    return gulp
        .src([
            paths.src + '/*',
            paths.src + '/*/*'
        ])
        .pipe(gulp.dest(paths.build))
});

gulp.task('minify-js', () => {
    return gulp
        .src(paths.build + '/main.js')
        .pipe(
            babel({
                presets: ['@babel/preset-env'],
            }),
        )
        .pipe(uglify())
        .pipe(gulp.dest(paths.build))
});

gulp.task('minify-css', () => {
    return gulp
        .src(paths.build + '/styles/main.css')
        .pipe(cssmin())
        .pipe(gulp.dest(paths.build + '/styles/'))
});

// clean dist
gulp.task('clean', function () {
    return gulp.src(paths.build, { read: false, allowEmpty: true }).pipe(clean());
});

// Prepare all src for production
gulp.task('build', gulp.series('clean', 'copy-to-dest', 'minify-js', 'minify-css'));
