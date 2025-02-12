const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(images, styles);
exports.images = images;

exports.watch = function() {
    gulp.watch('./src/**/*.scss', styles);
}