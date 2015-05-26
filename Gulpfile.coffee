gulp = require 'gulp'
plumber = require 'gulp-plumber'
coffee = require 'gulp-coffee'

gulp.task 'coffee', ->
	return gulp.src 'src/**/*.coffee'
		.pipe plumber()
		.pipe coffee({bare: true})
		.pipe gulp.dest 'lib/'

gulp.task 'default', ['coffee'], ->
	gulp.watch 'src/**/*.coffee', ['coffee']
