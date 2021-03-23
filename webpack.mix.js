const mix = require('laravel-mix');
const path = require('path');

mix.setPublicPath('../public_html');

mix.js('resources/js/app.js', 'public_html/js').vue();
mix.sass('resources/sass/app.scss', 'public_html/css');
