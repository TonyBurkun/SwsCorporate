'use strict';

const gulp = require('gulp'),
        watch = require('gulp-watch'),
        prefixer = require('gulp-autoprefixer'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-sass'),
        sourcemaps = require('gulp-sourcemaps'),
        include = require('gulp-file-include'),
        importCss = require('gulp-import-css'),
        cssmin = require('gulp-clean-css'),
        rimraf = require('rimraf'),
        browserSync = require("browser-sync"),
        reload = browserSync.reload;


const path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/**/*.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};


gulp.task('html:build', function (cb) {
    gulp.src(path.src.html)
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
    cb();
});

gulp.task('js:build', function (cb) {
    gulp.src(path.src.js)
        .pipe(include({prefix: '@@'}))
        .pipe(sourcemaps.init())
        // .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
    cb();
});

gulp.task('style:build', function (cb) {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(importCss())
        .pipe(sass())
        .pipe(prefixer())
        // .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
    cb();
});

gulp.task('image:build', function (cb) {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
    cb();
});

gulp.task('fonts:build', function(cb) {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
    cb();
});

gulp.task('build', gulp.series('html:build', 'js:build', 'style:build', 'fonts:build', 'image:build'));


gulp.task('webserver', function (cb) {
    browserSync(config);
    cb();
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('watch', function(cb) {
   gulp.watch(path.watch.html, gulp.series('html:build'));
   gulp.watch(path.watch.style, gulp.series('style:build'));
   gulp.watch(path.watch.js, gulp.series('js:build'));
   gulp.watch(path.watch.img, gulp.series('image:build'));
   gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
   cb();
});

gulp.task('default', gulp.series('build', 'webserver', 'watch'));