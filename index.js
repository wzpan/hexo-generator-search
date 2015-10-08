var merge = require('utils-merge');
var pathFn = require('path');

var config = hexo.config.search = merge({
	path: 'search.xml',
	field: 'post'
}, hexo.config.search);

// Set default search path
if (!config.path){
  config.path = 'search.xml';
}

// Add extension name if don't have
if (!pathFn.extname(config.path)){
  config.path += '.xml';
}

hexo.extend.generator.register('search', require('./lib/generator'));
