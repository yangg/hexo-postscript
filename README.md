# hexo-postscript

**hexo-postscript** is an useful tool for adding current post link in hexo post page.

## Install

```bash
$ npm install hexo-postscript --save
```

## Usage

First add configuration in `_config.yml` from your hexo project.

```yaml
postscript: "> 原文地址：[${post.permalink}](${post.permalink})\n获取最佳阅读体验并参与[讨论](${post.permalink}#comments)，请访问原文"
```

Run hexo command.

```bash
$ hexo clean && hexo g
```

## Demo

[Brook's blog](http://uedsky.com)

## License

MIT
