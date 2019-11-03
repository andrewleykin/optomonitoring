module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./dev/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    global: JSON.parse($.fs.readFileSync('./data/global.json', 'utf8')),
                    index: JSON.parse($.fs.readFileSync('./data/pages/index.json', 'utf8')),
                    skms: JSON.parse($.fs.readFileSync('./data/pages/skms.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
