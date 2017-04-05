var ejs = require('ejs');
var pathFn = require('path');
var fs = require('fs');

ejs.filters.cdata = function(str){
  return str ? '<![CDATA[' + str + ']]>' : '';
};

var searchTmplSrc = pathFn.join(__dirname, '../templates/xml.ejs');
var searchTmpl = ejs.compile(fs.readFileSync(searchTmplSrc, 'utf8'));

module.exports = function(locals){
  var config = this.config;
  var searchConfig = config.search;
  var template = searchTmpl;
  var searchfield = searchConfig.field;

  var posts, pages;

  if(searchfield.trim() != ''){
    searchfield = searchfield.trim();
    if(searchfield == 'post'){
      posts = locals.posts.sort('-date');
    }else if(searchfield == 'page'){
      pages = locals.pages;
    }else{
      posts = locals.posts.sort('-date');
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
