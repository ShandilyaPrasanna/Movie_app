var gulp = require('gulp'); 
var browserify = require('browserify');    // handels all require statement and combine in main file main.js
var reactify = require('reactify');        // jsx conversion
var source = require('vinyl-source-stream');// use to read content

gulp.task('browserify',function(){
    browserify('src/js/main.js')
        .transform('reactify')       // transform using reactivy for jsx
        .bundle()                    // putting in one file
        .pipe(source('main.js'))     // source 
        .pipe(gulp.dest('dist/js'))  //creates dist 
});

gulp.task('copy',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));         // copy all html file in dist
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));      // copy all css file in dist/css
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));      
});

gulp.task('default',['browserify','copy'],function(){                 
    return gulp.watch('src/**/*.*',['browserify','copy']);           //keep watching if changes occur again run browserify
});
