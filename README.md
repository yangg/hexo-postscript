# hexo-postscript

[![npm:](https://img.shields.io/npm/v/hexo-postscript.svg?style=flat)](https://www.npmjs.com/packages/hexo-postscript)

**hexo-postscript** is an useful tool for adding current post link in hexo post page.

## Installation

```bash
npm install --save hexo-postscript
```

## Usage

First add configuration in `_config.yml` from your hexo project, support javascript template string.
See Hexo [Post Variables](https://hexo.io/docs/variables.html#Page-Variables)

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
