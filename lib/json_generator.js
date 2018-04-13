var pathFn = require('path');
var fs = require('fs');

module.exports = function(locals){
    var config = this.config;
    var searchConfig = config.search;
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

    var res = new Array() 
    var index = 0
    
    if(posts){     
        posts.each(function(post) { 
            var temp_post = new Object() 
            if (post.title) { 
                temp_post.title = post.title 
            } 
            if (post.path) { 
                temp_post.url = config.root + post.path 
            } 
            if (post._content) { 
                temp_post.content = post._content 
            } 
            if (post.author) {
                temp_post.author = post.author
            }
            if (post.tags && post.tags.length > 0) { 
                var tags = new Array() 
                var tag_index = 0 
                post.tags.each(function (tag) {
                    tags[tag_index] = tag.name; 
                }); 
                temp_post.tags = tags 
            } 
            if (post.categories && post.categories.length > 0) { 
                var categories = new Array() 
                var cate_index = 0 
                post.categories.each(function (cate) {
                    categories[cate_index] = cate.name; 
                }); 
                temp_post.categories = categories 
            } 
            res[index] = temp_post;  
            index += 1; 
	    }); 
    } 
    if(pages){ 
        pages.each(function(page){ 
            var temp_page = new Object() 
            if (page.title) { 
                temp_page.title = page.title 
            } 
            if (page.path) { 
                temp_page.url = config.root + page.path 
            } 
            if (page._content) { 
                temp_page.content = page._content 
            } 
            if (page.tags && page.tags.length > 0) { 
                var tags = new Array() 
                var tag_index = 0 
                page.tags.each(function (tag) {
                    tags[tag_index] = tag.name; 
                }); 
                temp_page.tags = tags 
            } 
            if (page.categories && page.categories.length > 0) {
                temp_page.categories = []
                (page.categories.each || page.categories.forEach)(function (item) {
                    temp_page.categories.push(item);
                });
            } 
            res[index] = temp_page;  
            index += 1; 
        }); 
    } 


    var json = JSON.stringify(res);

    return {
        path: searchConfig.path,
        data: json
    };
};
