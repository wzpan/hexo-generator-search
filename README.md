# hexo-generator-search

Generate search data.

## Install

``` bash
$ npm install hexo-generator-search --save
```

- Hexo 3: 1.x
- Hexo 2: 0.x

## Options

You can configure this plugin in `_config.yml`.

``` yaml
search:
  path: search.xml
  field: post
```

- **path** - file path. (Default: search.xml)
- **search_field** - the field you want to search, you can chose post 、page or post,page(Default:post)