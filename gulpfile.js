var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var gulpReact = require('gulp-react');
// var htmlReplace = require('gulp-html-replace');

var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");


var path = {
    HTML: 'index.html',
    ALL: ['src/tsx/*.tsx', 'src/tsx/**/*.tsx', 'index.html'],
    TS: ['src/tsx/*.tsx', 'src/tsx/**/*.tsx'],
    MINIFIED_OUT: 'build/build.min.js',
    DEST_SRC: 'build/dist/src',
    DEST_BUILD: 'build/dist/build',
    DEST: 'build/dist'
};

gulp.task('default', function(){
    console.log("hello gulp");
});


gulp.task("tsbuild", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("build"));
});
