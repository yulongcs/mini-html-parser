# mini-html-parser

## 安装

```
$ npm install mini-html-parser --save
```

## 使用

```js
// page.js
const html = `<div>
<span>test</span>
<div>
    <span>table test</span>
    <table>
        <thead>
            <tr>
                <th>title</th>
                <th>title</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2">yy</td>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
            </tr>
        </tbody>
    </table>
</div>
</div>`
import parse from 'mini-html-parser';

Page({
  data: {},
  onLoad() {
    this.setData({
      nodes: parse(html),
    });
  },
})
```

```html
<!-- page.axml -->
<rich-text nodes="{{nodes}}" />
```
