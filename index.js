'use strict';

var config = hexo.config;

hexo.extend.filter.register('before_post_render', function (data) {
  // config set
  // and is published
  if (!(config.postscript && data.published)) {
    return data;
  }

  var getPS = new Function('post', 'return `' + config.postscript + '`');
  var postscript = getPS(data);
  data.content += postscript ? ('\n\n' + postscript) : '';
});
