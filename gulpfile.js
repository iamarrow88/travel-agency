const { src, dest, watch, parallel, series } = require('gulp');
const gulpSharp = require('gulp-sharp');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const newer = require('gulp-newer');




function images() {
  return src([
    '/src/images/**/*.*',
    '!src/images/**/*.svg'
  ])
      .pipe(newer('src/images'))
      .pipe(avif({ quality: 50 }))
      .pipe(src([
        'src/images/**/*.*',
        '!src/images/**/*.svg'
      ]))
      .pipe(newer('src/images'))
      .pipe(webp())
      .pipe(src([
        'src/images/**/*.*',
        '!src/images/**/*.svg'
      ]))
      .pipe(newer('src/images'))
      .pipe(imagemin())
      .pipe(dest('public/assets/images'))
}

function toAVIF() {
  return src([
      '/src/images/**/*.*',
      '!src/images/**/*.svg'
  ])
      .pipe(avif({ quality: 50 }))
      .pipe(dest('public/assets/images'))
}

/*
* gulp.src('./from/*.{png,jpg,svg}')
        .pipe(gulpAvif())
        .pipe(gulp.dest('./to/'));*/

function toWebp() {
  return src([
    'src/images/**/*.*',
    '!src/images/**/*.svg'
  ])
      .pipe(webp())
      .pipe(dest('public/assets/images'))
}

function fonts() {
  return src('src/fonts/**/*.*')
      .pipe(fonter({
        formats: ['woff', 'ttf']
      }))
      .pipe(src('src/fonts/**/*.ttf'))
      .pipe(ttf2woff2())
      .pipe(dest('public/fonts'))
}


exports.images = images;
exports.toWebp = toWebp;
exports.fonts = fonts;


exports.default = parallel(toAVIF, toWebp, fonts);