const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//compile SASS files into CSS files
gulp.task('sass', ()=>{
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
})

//create a server and watch for file changes
gulp.task('serve', ()=>{
    browserSync.init({
        server: './'
    });
    gulp.watch('scss/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
})

gulp.task('default', gulp.series('serve'))