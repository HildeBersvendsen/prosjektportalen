'use strict';
var gulp = require("gulp"),
    clean = require('gulp-clean'),
    runSequence = require("run-sequence"),
    config = require('./@configuration.js');

gulp.task("cleanNodeModules", done => {
    return gulp.src(config.paths.nodeModules, { read: false }).pipe(clean());
});

gulp.task("clean", done => {
    return gulp.src([config.paths.lib, config.paths.dist, config.paths.templatesTemp], { read: false }).pipe(clean());
});