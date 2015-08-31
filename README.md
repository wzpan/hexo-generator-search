# hexo-generator-search

Generate search data for Hexo 3.0. This plugin is used to generator a `search.xml` file, which contains all the neccessary data of your articles that you can use to write a local search engine for your blog.

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

- **path** - file path. Default is `search.xml` .
- **field** - the search scope you want to search, you can chose:
  * **post** (Default) - will only covers all the posts of your blog.
  * **page** - will only covers all the pages of your blog.
  * **all** - will covers all the posts and pages of your blog.