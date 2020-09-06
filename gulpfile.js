const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');

//Img min

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({optimizationLevel: 7}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}
exports.images = images;

// Styles for build

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
    autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
 }

exports.styles = styles;

// Styles for source

const source = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
    autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
 }

exports.source = source;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("source"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  source, server, watcher
);



// Webp

const webp = require("gulp-webp");
const createWebp = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 75}))
    .pipe(gulp.dest("source/img"))
}
exports.webp = createWebp;

// SVG Sprite

const svgstore = require("gulp-svgstore");
const sprite = () => {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
}
exports.sprite = sprite;

// Copy file

const copy = () => {
  return gulp.src([
  "source/fonts/**/*.{woff,woff2}",
  "source/img/**.webp"
  ], {
  base: "source"
  })
  .pipe(gulp.dest("build"));
};
exports.copy = copy;

//delete file

const del = require("del");

const clean = () => {
  return del("build");
};
exports.clean = clean;

// HTML min

const htmlmin = require('gulp-htmlmin');

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
};
exports.html = html;

// JS min

var jsmin = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

const uglify = () => {
  return pipeline(
    gulp.src('source/js/*.js'),
    jsmin(),
    gulp.dest('build/js')
  );
};
exports.uglify = uglify;

//Assembly

const build = gulp.series(
  clean,
  copy,
  styles,
  html,
  uglify,
  sprite,
  images,
);
exports.build = build;
