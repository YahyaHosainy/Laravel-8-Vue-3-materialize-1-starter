const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', path.join(__dirname,'../public_html/js')).vue();
mix.sass('resources/sass/app.scss', path.join(__dirname,'../public_html/css'));
