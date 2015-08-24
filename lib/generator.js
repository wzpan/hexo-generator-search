var ejs = require('ejs');
var pathFn = require('path');
var fs = require('fs');

ejs.filters.cdata = function(str){
  return str ? '<![CDATA[' + str + ']]>' : '';
};

var searchTmplSrc = pathFn.join(__dirname, '../search.ejs');
var searchTmpl = ejs.compile(fs.readFileSync(searchTmplSrc, 'utf8'));

module.exports = function(locals){
  var config = this.config;
  var searchConfig = config.search;
  var template = searchTmpl;
  var searchfields = searchConfig.search_field;

  var posts, pages;

  if(searchfields.trim() != '' && (searchfields.indexOf('post') >= 0 || searchfields.indexOf('page') >= 0)){
    if(searchfields.indexOf('post') >= 0 ){
      posts = locals.posts.sort('-date');
    }

    if(searchfields.indexOf('page') >= 0 ){
      pages = locals.pages;
    }
  }else{
    posts = locals.posts.sort('-date');
  }

  var xml = template({
    config: config,
    posts: posts,
    pages: pages,
    feed_url: config.root + searchConfig.path
  });

  return {
    path: searchConfig.path,
    data: xml
  };
};