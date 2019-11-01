const template = require('pug-loader!./template.pug')

const locals = {
  isOK: true,
  url_short: 'test_example.html',
  url_long: 'www.baidu.com'
}

let html = template(locals)

document.body.innerHTML = html