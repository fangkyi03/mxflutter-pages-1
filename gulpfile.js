var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('default', function () {
  return gulp.src('./.next/**/*')
    .pipe(sftp({
      host: 'nongqibang.com',
      port:2222,
      user: 'root',
      pass: 'ztesa2018!farm',
      remotePath:'/var/cjy/farmTest/'
    }));
});
