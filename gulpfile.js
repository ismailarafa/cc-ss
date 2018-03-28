const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const postcssimport = require("postcss-import");
const vars = require("postcss-simple-vars");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");

gulp.task("styles", () =>
  gulp
    .src("src/cc-ss.css")
    .pipe(postcss([autoprefixer(), postcssimport(), vars()]))
    .pipe(cssnano())
    .pipe(rename("cc-ss.min.css"))
    .pipe(gulp.dest("."))
);
