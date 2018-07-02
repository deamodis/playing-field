const gulp = require('gulp');
const browserSync = require('browser-sync').create();


// ------_Server -------
gulp.task('server' , function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "src"
        }
    });


    gulp.watch('src/**/*').on('change', browserSync.reload)
});

