const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

// Compilar SASS para CSS
function compileSass() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Otimizar Imagens
function optimizeImages() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Minificar JavaScript
function minifyJs() {
    return gulp.src('src/js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('dist/js'));
}

// Watch para mudanças
function watchFiles() {
    gulp.watch('src/sass/**/*.scss', compileSass);
    gulp.watch('src/images/*', optimizeImages);
    gulp.watch('src/js/**/*.js', minifyJs);
}

// Definir tarefas padrão
exports.default = gulp.series(
    gulp.parallel(compileSass, optimizeImages, minifyJs),
    watchFiles
);
