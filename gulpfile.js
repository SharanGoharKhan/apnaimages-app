var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var bowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');
var angularFilesort = require('gulp-angular-filesort');
var historyApiFallback = require('connect-history-api-fallback');
var less = require('gulp-less');
var path = require('path');
// var cloudflare = require("gulp-cloudflare");
var runSequence = require('run-sequence');

const reload = browserSync.reload;

gulp.task('scripts',function(){
	return gulp.src('src/**/*.js')
		.pipe(angularFilesort())
		.pipe(ngAnnotate())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('less', function () {
  	return gulp.src(['src/core/ang/less/*.less','src/components/**/*.less'])
  		.pipe(concat('src/core/less/main.less'))
    	.pipe(less(
    		{
    			paths: [path.join('src/core/less/')]
    		}
    	))
    	.pipe(concat('main.min.css'))
    	.pipe(gulp.dest('dist/css/'));
});
// gulp.task('css',function(){
// 	return gulp.src('src/core/css/*.css')
// 	.pipe(concat('src'))
// })
gulp.task('imgs',function(){
	return gulp.src('src/core/imgs/**')
		.pipe(gulp.dest('dist/imgs'));
});

gulp.task('index',function(){
	return gulp.src("src/index.html")
      .pipe(gulp.dest('dist/'));
});

gulp.task('templates',function(){
	return gulp.src("src/**/*.html")
		.pipe(gulp.dest('dist/templates'));
});

gulp.task('component', function(){
  var name = process.argv.slice(3)[1];
  var fs = require('fs');
  var abs_path = name.split('.').join('/');
  var dir = './src/components/' + abs_path ;
  var url = name.split(".").pop();
  var controllerName = url.charAt(0).toUpperCase() + url.slice(1)

  fs.mkdirSync(dir);
  fs.writeFileSync(dir + "/" + url + ".js",'var app = angular.module("App");\n\napp.config(function($stateProvider){\n\t$stateProvider\n\t\t.state("app.'+ name + '",{\n\t\t\turl: "/' + url +'",\n\t\t\ttemplateUrl: "/templates/components/' + abs_path + '/' + url + '.html",\n\t\t\tcontroller: "'+ controllerName + 'Controller"\n\t\t})\n}); \n\napp.controller("' + controllerName + 'Controller", function ($scope) {\n\n});');
  fs.writeFileSync(dir + "/" + url + ".html",'');
  fs.writeFileSync(dir + "/" + url + ".less",'');
});

gulp.task('bower', function(){
	gulp.src(bowerFiles('**/*.js'))
        .pipe(concat('library.min.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist/js/'));

    gulp.src(bowerFiles('**/*.css'))
        .pipe(concat('library.min.css'))
        .pipe(gulp.dest('dist/css/'));

    gulp.src(bowerFiles('**/*.less'))
    	.pipe(less())
    	.pipe(concat('library.min.css'))
    	.pipe(gulp.dest('dist/css/'));
     return true;
});

gulp.task('serve', function(){

	browserSync({
	  notify: false,
	  port: 9000,
	  host: 'app.apnaimages.dev',
	  open: 'external',
	  server: {
	    baseDir: ['dist']
	    ,middleware: [historyApiFallback()]
	  }
	  
	});

	gulp.watch([
	  'dist/index.html',
	  'dist/**/*.html',
	  'dist/**/*.js'
	]).on('change', reload);

	gulp.watch('src/**/*.html',['templates']);
	gulp.watch('src/index.html', ['index']);
	gulp.watch('src/**/*.js',['scripts']);
});	

// gulp.task('purge-cache', function() {
// 	var options = {
// 		token  : 'c36f350fb5c870e6ae22f6c2f5617c23',
// 		email  : 'asif@probist.com',
// 		domain : 'hireninja.co'
// 	};
 
// 	cloudflare(options);
// });

gulp.task('dest', function() {
	runSequence('bower','index','templates','scripts', 'less', 'imgs');
});

gulp.task('default', ['bower','index','templates','scripts','serve', 'less', 'imgs']);
