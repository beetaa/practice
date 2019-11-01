/**
 * 舞台 - Stage
 * 
 * 1. Stage <-- Group <-- Display Object <-- Event Dispatcher
 * 2. 属性 disableMoveDetection 在 Web 和小程序中缺省为 false，在小游戏中缺省为 true
 *    属性 moveDetectionInterval 定义检测鼠标移动的间隔，单位为毫秒
 * 3. 通过 add() 添加内容
 * 4. 通过 update() 显示更新后的画面
 * 5. 通过 cax.tick() 实现动画，注意要使用 bind(stage)
 * 6. 通过 on() 处理舞台级别的事件
 */

const stage = new cax.Stage(400, 400, 'body')

stage.disableMoveDetection = false
stage.moveDetectionInterval = 500
stage.on('mousemove', () => console.log(`检测到移动 - 舞台 - ${Date.now()}`))

const rectRed = new cax.Rect(100, 100, {
  fillStyle: 'red'
})

stage.add(rectRed)
stage.update()

const rectBlue = new cax.Rect(100, 100, {
  fillStyle: 'blue'
})

stage.add(rectBlue)

function moveRectBlue(): void {
  rectBlue.x += 1
  if (rectBlue.x > 400) {
    rectBlue.x = 0
  }
}

cax.tick(function() {
  moveRectBlue()
  stage.update()
}).bind(stage)
