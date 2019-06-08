var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('default', function () {
  return gulp.src('./out/**/*')
    .pipe(sftp({
      host: '192.167.5.113',
      port: 22,
      user: 'root',
      pass: 'ztesa2018!farm',
      remotePath: '/var/jyz/h5web/'
    }));
});