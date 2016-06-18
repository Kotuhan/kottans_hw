'use strict'

const posthtml = require('posthtml');

const patternJs = /(\s|^)js-\w\S*/g

const patternBootstr = /(?:col)-(?:lg|xs|sm|md)-(?:(?:\d{1,2})|(?:(?:push|pull|offset)-\d{1,2}))/ig

const html = `
    <div class="js-12222 js-2 js-3 col-xs-4 aaaaaaaaaaaaaa b c">
    </div>`

const plugin = (tree) => tree
  .match({attrs: {class: true}}, (node) => {
    let oldClasses = node.attrs.class.split(' ')
    let newClasses = ''
    let dataJS = ''

    oldClasses.forEach( (cls,i) => {
      oldClasses[i] = cls.replace(patternBootstr, '')

      if (oldClasses[i].search(patternJs) != -1){
        dataJS += oldClasses[i]+' '
        oldClasses[i]=''
      }
      if (oldClasses[i] != ''){
        newClasses += oldClasses[i]+ ' '

      }
      })

     newClasses == "" ? node.attrs.class = false  : node.attrs.class = newClasses.trim()
     node.attrs["data-js"] =  dataJS.trim()

    return node
  });



posthtml([plugin])
    .process(html)
    .then((result) => console.log(result.html))