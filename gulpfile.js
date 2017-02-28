var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var gulpReact = require('gulp-react');
// var htmlReplace = require('gulp-html-replace');

var ts = require("gulp-typescript");
// var tslint = require("gulp-tslint");
var tsProject = ts.createProject("tsconfig.json", {});

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
/*
have a working gulpfile on other branch need to understand why this no work
*/

var path = {
    HTML: 'index.html',
    ALL: ['src/*.ts', 'src/**/*.ts', 'index.html'],
    TS: ['src/*.ts', 'src/**/*.ts'],
    MINIFIED_OUT: 'build/build.min.js',
    DEST_SRC: 'build/dist/src',
    DEST_BUILD: 'build/dist/build',
    DEST: 'build/dist'
};

gulp.task("ts:build", function() {
    return gulp.src(path.TS)
        // .pipe(tslint({
        //     formatter: "verbose"
        // }))
        // .pipe(tslint.report({
        //     emitError: true
        // }))
        .pipe(tsProject())
        .js
        .pipe(gulpConcat("build/bundle.js"))
        .pipe(gulp.dest('build'))
        .on("error", function() {});
});


gulp.task("tsbuild", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("build"));
});
