const gulp = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Caminhos dos arquivos
const paths = {
    styles: {
        src: 'src/less/**/*.less',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images/'
    }
};

// Tarefa de compilação do LESS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa de otimização de imagens
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

// Tarefa de minificação e concatenação de JS
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa de monitoramento
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

// Exportar tarefas
exports.styles = styles;
exports.images = images;
exports.scripts = scripts;
exports.watch = watch;

// Tarefa padrão
exports.default = gulp.series(gulp.parallel(styles, scripts, images), watch);