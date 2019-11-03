/**
 * Workspace 的选项
 * 
 * - media: 字符串，定义 blockly 查找媒体文件的路径（目录），缺省是 `"https://blockly-demo.appspot.com/static/media/"`，可修改为自己的 CDN 或相对路径，注意最后的反斜杠
 * - toolbox: Dom 节点或字符串，内容是 xml 格式
 * - toolboxPosition: start | end，start 表示开始处，end 表示终点处
 * - trashcan: 布尔值，决定是否显示垃圾桶。toolbox 包含分类时缺省为 true，否则缺省为 false
 * - maxTrashcanContents: 数值，垃圾桶中显示的已删除的代码块数量限制，缺省为 32，如果为 0，则不显示删除历史。需要修改 d.ts
 * - collapse: 布尔值，是否允许代码折叠，toolbox 包含分类时缺省为 true，否则缺省为 false
 * - comments: 布尔值，是否允许代码块包含注释，toolbox 包含分类时缺省为 true，否则缺省为 false
 * - css: 布尔值，如果为 false，则不注入样式。缺省为 true
 * - disable: 布尔值，是否允许将代码块设为禁用。toolbox 包含分类时缺省为 true，否则缺省为 false
 * - horizontalLayout: 布尔值，是否将 toolbox 横着显示，缺省为 false
 * - grid: 对象，用于定制界面的网格，包含以下属性：
 *    - spacing: 数值，定义网格大小，越小越密，缺省为 0 无网格
 *    - length: 数值，定义网点的显示大小，0 表示隐藏，1 是缺省值，显示为点；大于 1 的整数则显示为十字
 *    - colour: 字符串，定义网点的颜色，缺省为 #888，可使用与 css 兼容的表示方法，如 #f00, #ff0000, rgb(255, 0, 0)
 *    - snap: 布尔值，是否将代码块捕抓至最近的网点，缺省为 false
 * - maxBlocks: 数值，定义最多可创建的代码块数量，出题时很有用，缺省为不限制。注意，这个属性在 pxt-blockly 缺省被省略，需要修改 d.ts 的接口定义
 * - maxInstances: 对象，一个属性定义一个代码块类别可以创建的最大限制，出题时很有用，缺省为不限制。注意，这个属性和 maxBlocks 一样处理
 * - move: 对象，决定 workspace 的拖动方式，有以下属性：
 *   - scrollbars: 布尔值，是否显示滚动条，toolbox 包含分类时缺省为 true
 *   - drag: 布尔值，是否可以使用鼠标左键或中键拖动 workspace，scrollbars 为 false 时，不能拖动
 *   - wheel: 布尔值，是否可以使用鼠标中键滚动 workspace，缺省为 false，scrollbars 为 false 时，不能滚动
 * - oneBasedIndex: 布尔值，true 时，数组和字符串的索引以 1 开始，false 时以 0 开始，缺省为 true
 * - readonly: 布尔值，true 时不能编辑，不显示 toolbox 和回收站，缺省为 false
 * - rtl: 布尔值，true 时将整个界面从右到左显示，一般不用，缺省为 false
 * - scrollbars: 布尔值，true 时可滚动，false 时不可滚动。toolbox 包含分类时缺省为 true，否则缺省为 false。注意该选项与 move.scrollbars 重叠，会被后者覆盖
 * - sounds: 布尔值，决定是否在删除和点击等操作时发出声音，缺省为 true，该属性在 d.ts 中有误，要修改 workspaceOptions.sound -> sounds
 * - zoom: 对象，配置 workspace 缩放行为，有如下属性：
 *   - controls: 布尔值，是否显示定位至中心，放大，缩小控件
 *   - wheel: 布尔值，是否可通过鼠标滚轮缩放，缺省为 false，且与 move.wheel 冲突，后者优先
 *   - startScale: 数值
 *   - maxScale: 数值
 *   - minScale: 数值
 *   - scaleSpeed: 数值
 */

const workspace = Blockly.inject('blocklyDiv', {
  media: 'media/',
  toolbox: document.getElementById('toolbox'),
  toolboxPosition: 'start',
  trashcan: true,
  maxTrashcanContents: 0,
  horizontalLayout: false,
  collapse: false,
  comments: false,
  css: true,
  theme: Blockly.Themes.Mordern,
  disable: false,
  grid: {
    spacing: 20,
    length: 5,
    colour: '#ccc',
    snap: true
  },
  maxBlocks: 5,
  maxInstances: {
    controls_if: 2
  },
  scrollbars: false,
  move: {
    scrollbars: true,
    drag: false,
    wheel: false
  },
  readOnly: false,
  rtl: false,
  sounds: false,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1,
    maxScale: 3.0,
    minScale: 0.3,
    scaleSpeed: 1.2
  }
})