# blockly

- toolbox 的标准格式是 xml，可以引用一个 dom 获得内容，也可以传入一个字符串
- toolbox 可以通过在线工具定制和生成代码

## workspace 选项说明

- media: 字符串，定义 blockly 查找媒体文件的路径（目录），缺省是 `"https://blockly-demo.appspot.com/static/media/"`，可修改为自己的 CDN 或相对路径，注意最后的反斜杠
- collapse: 是否允许折叠，缺省情况下，toolbox 包含分类时，缺省为 true，不包含分类时，缺省为 false
- comments: 是否允许代码块包含注释，如果 toolbox 包含分类，缺省为 true，否则缺省为 false，**这个，与分类有什么关系？是作用于 toolbox 还是 workspace？**
- css: 如果为 false，则不注入样式。缺省为 true
- disable: 是否允许代码块被设置为不可用状态？如果 toolbox 包含分类，缺省为 true，否则缺省为 false
- grid: 一个配置对象，用于制定可让代码块对其的网格，包含：
  - spacing: 网格大小，越小越密，缺省为 0 无网格
  - length: 网点的显示大小，0 表示隐藏，1 是缺省值，显示为点；大于 1 的整数则显示为十字
  - colour: 网点的颜色，缺省为 #888，可使用与 css 兼容的表示方法，如 #f00, #ff0000, rgb(255, 0, 0)
  - snap: 是否将代码块捕抓至最近的网点，缺省为 false
- horizontalLayout - 是否将 toolbox 横着显示，缺省为 false，即竖着显示
