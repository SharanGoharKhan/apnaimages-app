var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var bowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');
var angularFilesort = require('gulp-angular-filesort');
var historyApiFallback = require('connect-history-api-fallback');
var less = require('gulp-less');
var php  = require('gulp-connect-php');
var path = require('path');
var templateCache = require('gulp-angular-templatecache');
var fs = require('fs');
var gutil = require('gulp-util');
var minifyjs = require('gulp-uglify');

const reload = browserSync.reload;
gulp.task('scripts',function(){
	return gulp.src('src/**/*.js')
		.pipe(angularFilesort())
		.pipe(ngAnnotate())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('dist/js/'));
});
gulp.task('less', function () {
	return gulp.src(['src/core/less/main.less','src/components/**/*.less'])
		.pipe(less(
			{
				paths: [path.join('src/core/less/')]
			}
        	))
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest('dist/css/'));
});
gulp.task('index',function(){
	return gulp.src(["src/index.html","src/index.php"])
      .pipe(gulp.dest('dist/'));
});
gulp.task('bower', function(){
	gulp.src(bowerFiles('**/*.js'))
        .pipe(concat('library.min.js'))
        .pipe(ngAnnotate())
        .pipe(minifyjs({ mangle: true }))
        .pipe(gulp.dest('dist/js/'));

    gulp.src(bowerFiles('**/*.css'))
        .pipe(concat('library.min.css'))
        .pipe(gulp.dest('dist/css/'));

    return true;
});
gulp.task('serve', function(){

	browserSync({
	  notify: false,
	  port: 9000,
	  host: 'app.probist.dev',
	  open: 'external',
	  server: {
	    baseDir: ['dist'],
	    middleware: [historyApiFallback()]
	  }
	});

});	
gulp.task('watch',function(){
	gulp.watch([
	  'src/index.html',
	  'dist/**/*.html',
	  'dist/**/*.js'
	]).on('change', reload);
	gulp.watch(['src/index.html','src/index.php'], ['index']);
	gulp.watch('src/**/*.js',['scripts']);
    gulp.watch(['src/core/less/**/*.less','src/components/**/*.less'],['less']);

});
gulp.task('imgs',function(){
	return gulp.src('src/imgs/**/*')
		.pipe(gulp.dest('dist/imgs'));
});
gulp.task('templates',function(){
	return gulp.src("src/**/*.html")
		.pipe(gulp.dest('dist/templates'));
});
gulp.task('serve', function(){

	browserSync({
	  notify: false,
	  port: 9000,
	  host: 'app.apnaimages.dev',
	  open: 'external',
	  server: {
	    baseDir: ['dist'],
	    middleware: [historyApiFallback()]
	  }
	});

});	
gulp.task('dest', ['index','scripts','bower','templates', 'less', 'imgs']);

gulp.task('default', ['dest', 'watch']);

