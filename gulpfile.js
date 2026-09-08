var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var pug = require('gulp-pug');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};




/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
    browserSync.notify(messages.jekyllBuild);
    cp.spawn(jekyll, ['build'], { stdio: 'inherit' })
        .on('close', function (code) {
            if (code === 0) {
                done();
            } else {
                done(new Error('Jekyll build failed with code: ' + code));
            }
        });
});




/**
 * Rebuild Jekyll & do page reload
 */
//gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function (done) {
    browserSync.reload();
    done();
}));



/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            silenceDeprecations: ['import', 'global-builtin', 'if-function', 'color-functions', 'legacy-js-api'],
            quietDeps: true
        }).on('error', sass.logError))
        .pipe(prefix({ overrideBrowserslist: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('assets/css'));
});



/**
 * Wait for jekyll-build, then launch the Server
 */
// gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
gulp.task('browser-sync', gulp.series('sass', 'jekyll-build', function (done) {
    browserSync.init({
        server: '_site',
        notify: false
    }, done);
}));





/*
* Travis is trying to Gulp stuff
*/

gulp.task('pug', function () {
    return gulp.src('_pugfiles/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('_includes'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['assets/css/**/*.scss', 'assets/css/**/*.sass'], gulp.series('sass'));
    gulp.watch('assets/js/**', gulp.series('jekyll-rebuild'));
    gulp.watch(['index.html', '_layouts/*.html', '_includes/*', '_posts/*', '*.md'], gulp.series('jekyll-rebuild'));
    gulp.watch('_pugfiles/*.pug', gulp.series('pug', 'jekyll-rebuild'));
});




/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series('browser-sync', 'watch'));
