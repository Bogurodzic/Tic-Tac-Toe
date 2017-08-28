const gulp = require('gulp');
const del = require('del');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const shell = require('gulp-shell');


gulp.task("clean", function(){
	return del("build/**/*");
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task("autoprefixer", function(){
	gulp.src("src/css/main.css")
	.pipe(plumber())
	.pipe(autoprefixer({
		browsers: ['last 15 versions', "IE 9"]
	})).pipe(gulp.dest("src/css/"));
});

gulp.task("copy", function(){
	return gulp.src(["src/css/main.css", "src/js/bundle.js", "src/index.html"], {
		base: "src/"
	})
	.pipe(gulp.dest("build/"));
});

gulp.task("images", function(){
	return gulp.src("build/img/*", {
		base: "build/"
	})
	.pipe(imagemin())
	.pipe(gulp.dest("build/"));
});

gulp.task("webpack", function(){
  shell('npm start');
});

gulp.task("watch", function(){
  gulp.watch("src/js/*", ["webpack"]);
	gulp.watch(["./src/scss/**/*.scss"],  ["sass"]);
  gulp.watch("src/scss/*.scss", ["sass"]);
	gulp.watch("src/css/*.css", ["autoprefixer"]);
	gulp.watch(["src/css/*.css", "src/index.html", "src/js/*.js", "src/scss/*"], browserSync.reload);
});

gulp.task("build:server", function(){
	browserSync.init({
		server: "src/"
	});
});

gulp.task("build", function(){
	runSequence("clean", "sass", "autoprefixer", "copy", "images");
});

gulp.task("server", ["watch", "build:server"]);
