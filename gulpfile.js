'use strict'
var gulp = require('gulp')
var babel = require('gulp-babel')
var react = require('gulp-react')
var less = require('gulp-less')
var webpack = require('gulp-webpack')
var autoprefixer = require('gulp-autoprefixer')
var jsx2example = require('gulp-jsx2example')
var named = require('vinyl-named')
var del = require('del')

var cwd = process.cwd()
var packageInfo = require('./package.json')

function getResolve() {
  var alias = {}
  var resolve = {
    root: cwd,
    extensions: ['', '.js', '.jsx'],
    alias: alias
  }
  var name = packageInfo.name
  alias[name] = cwd
  return resolve
}

gulp.task('jsx', ['clean:site'], function() {
  return gulp.src(['src/**/*.jsx', 'src/**/*.js'])
    .pipe(react({
      es6module: true
    }))
    .pipe(babel())
    .pipe(gulp.dest('lib'))
})

gulp.task('less', function() {
  return gulp
    .src('assets/index.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets'))
})

gulp.task('clean:site', function(done) {
  del('./site/', function(err, paths) {
    done()
  })
})

gulp.task('clean:lib', function(done) {
  del('./lib/', function(err, paths) {
    done()
  })
})

gulp.task('examples', ['clean:site', 'jsx'], function() {
  return gulp
    .src(['./examples/*.*'])
    .pipe(jsx2example())
    .pipe(gulp.dest('site/examples/'))
})

gulp.task('webpack', ['clean:site', 'jsx'], function() {
  return gulp.src(['examples/*.js'])
    .pipe(named())
    .pipe(webpack({
      timings: true,
      devtool: "#source-map",
      module: {
        loaders: [{
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel'
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }, {
          test: /\.css/,
          loader: 'style!css'
        }, {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&minetype=application/font-woff"
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&minetype=application/font-woff"
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&minetype=application/octet-stream"
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&minetype=image/svg+xml"
        }]
      },
      externals: {
        react: "React"
      },
      resolve: getResolve(),
      plugins: [
        new webpack.webpack.optimize.CommonsChunkPlugin("common.js")
      ]
    }))
    .pipe(gulp.dest('site/examples'))
})

gulp.task('build', function() {
  gulp.start(['less', 'jsx', 'webpack', 'examples'])
})
