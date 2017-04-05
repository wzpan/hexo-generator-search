# hexo-generator-search

Generate search data for Hexo 3.0. This plugin is used for generating a search index file, which contains all the neccessary data of your articles that you can use to write a local search engine for your blog. Supports both XML and JSON format output.

- [Demo](http://wzpan.github.io/hexo-theme-freemind/404.html) - check out the search engine in this 404 page.
- [Demo JSON output](https://github.com/PaicHyperionDev/hexo-generator-search/blob/master/demo_output/search.json)
- [Demo XML output](https://github.com/PaicHyperionDev/hexo-generator-search/blob/master/demo_output/search.xml)

## Install

``` bash
$ npm install hexo-generator-search --save
```

## Options

You can configure this plugin in your root `_config.yml`.

``` yaml
search:
  path: search.xml
  field: post
```

- **path** - file path. By default is `search.xml` . If the file extension is `.json`, the output format will be JSON. Otherwise XML format file will be exported.
- **field** - the search scope you want to search, you can chose:
  * **post** (Default) - will only covers all the posts of your blog.
  * **page** - will only covers all the pages of your blog.
  * **all** - will covers all the posts and pages of your blog.
