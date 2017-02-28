var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var gulpReact = require('gulp-react');
// var htmlReplace = require('gulp-html-replace');

var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");

var tsProject = ts.createProject('tsconfig.json');
var tsSrc = ['src/**/*.ts', 'src/**/*.tsx'];

var watchify = require("watchify");
var gutil = require("gulp-util");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/tsx/app.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

var path = {
    HTML: 'index.html',
    ALLHTML: 'src/html/*.html',
    ALL: ['src/*.ts', 'src/**/*.ts', 'index.html'],
    TS: ['src/*.ts', 'src/**/*.ts'],
    MINIFIED_OUT: 'build/build.min.js',
    DEST_SRC: 'build/dist/src',
    DEST_BUILD: 'build/dist/build',
    DEST: 'build/dist'
};

//need to understand from this tutorial https://www.typescriptlang.org/docs/handbook/gulp.html
function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build'));
}

gulp.task('copy-html', function () {
    return gulp.src(path.HTML)
        .pipe(gulp.dest('build'));
});
gulp.task("default", ["copy-html"], bundle);
// gulp.task('default', ['copy-html'], function () {
//     return browserify({
//         basedir: '.',
//         debug: true,
//         entries: ['src/tsx/app.ts'],
//         cache: {},
//         packageCache: {}
//     })
//     .plugin(tsify)
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('build'));
// });

gulp.task("ts:build", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulpConcat('bundle.js'))
        .pipe(gulp.dest('build'));
});

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
// gulp.task("tsbuild", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("build"));
// });
