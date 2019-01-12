const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const tinify = require('gulp-tinypng-unlimited');
const del = require('del');
const vinylPaths = require('vinyl-paths');

//compile SASS files into CSS files
gulp.task('sass', ()=>{
    return gulp.src(['scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
})

//minify css files
gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/'));
});

//optimize images
gulp.task('optimize-imgs', () => {
    return gulp.src('img/events/unoptimized/*.@(png|jpg|JPG|jpeg)')
      .pipe(tinify())
      .pipe(vinylPaths(del)) //delete the unoptimized images afterwards
      .pipe(gulp.dest('img/events/'));
  });

//create a server and watch for file changes
gulp.task('serve', ()=>{
    browserSync.init({
        server: './'
    });
    gulp.watch(['scss/*.scss'], gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
})

//default task when you just type in 'gulp'
gulp.task('default', gulp.series('serve'))