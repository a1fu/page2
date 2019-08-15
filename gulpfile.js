const gulp = require('gulp')
const sass = require('gulp-sass')
const gls = require('gulp-live-server')

gulp.task('build-style:sass', () => {
    return gulp.src('scss/style/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
})

gulp.task('build-responsive:sass', () => {
    return gulp.src('scss/responsive/responsive.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
})

gulp.task('watch', () => {
    gulp.watch('scss/style/**/*.scss', gulp.parallel('build-style:sass'))
    gulp.watch('scss/responsive/**/*.scss', gulp.parallel('build-responsive:sass'))
})

gulp.task('server', () => {
    const server = gls.static('.', 4000)
    server.start()

    gulp.watch('**/*')
    .on('change', path => server.notify.call(server, { path }))
})

gulp.task('build-style', gulp.parallel( 'build-style:sass' ))
gulp.task('build-responsive', gulp.parallel( 'build-responsive:sass' ))