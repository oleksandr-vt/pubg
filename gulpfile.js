const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require('gulp-minify-css')
sass.compiler = require('node-sass')
// const autoprefixer = require('gulp-autoprefixer');

// exports.default = () => (
//     gulp.src('./src/scss/style.scss')
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(gulp.dest('./build/css'))
// );

const scssTask = () => {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        // .pipe(autoprefixer({
        //     cascade: false
        // }))
        .pipe(gulp.dest('./build/css'))
}

const htmlTask = () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'))
}

const imageTask = () => {
    return gulp.src('./src/images/*')
        .pipe(gulp.dest('./build/images'))
}

const fontsTask = () => {
    return gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./build/fonts'))
}

// const jsTask = () => {
//     return gulp.src('./src/js/*')
//         .pipe(gulp.dest('./build/js'))
// }

gulp.task('watch', () => {
    htmlTask()
    scssTask()
    imageTask()
    fontsTask()

    gulp.watch('./src/scss/**/*.scss', gulp.series(scssTask))
    gulp.watch('./src/*.html', gulp.series(htmlTask))
    gulp.watch('./src/images/*', gulp.series(imageTask))
    gulp.watch('./src/fonts/*', gulp.series(fontsTask))
    // gulp.watch('./src/js/*', gulp.series(jsTask))
});