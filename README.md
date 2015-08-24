# hexo-generator-search

Generate search data for Hexo 3.0.This plugin is used to generator a search.xml file.The file contains the main data of your blog so that you can use the data to finish a search function for your blog.

## Install

``` bash
$ npm install hexo-generator-search --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
search:
  path: search.xml
  field: post
```

- **path** - file path. (Default: search.xml)
- **field** - the field you want to search, you can chose post 、page or post,page(Default:post)