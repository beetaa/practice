/**
 * 群组 - Group
 * 
 * 1. Group <-- Display Object <-- Event Dispatcher
 * 2. 群组可以嵌套
 * 3. 父容器的属性会叠加在子属性上
 */

const stage2 = new cax.Stage(400, 400, 'body')

const group2 = new cax.Group()
const group21 = new cax.Group()
const group211 = new cax.Group()

const rect2 = new cax.Rect(50, 50, {
  fillStyle: 'red'
})
group2.add(rect2)
group2.x = 50

const rect21 = new cax.Rect(50, 50, {
  fillStyle: 'blue'
})
rect21.x = 50
group21.add(rect21)
group21.y = 50

group2.add(group21)
stage2.add(group2)

rect21.on('click', () => {
  group21.removeChildAt(0)
  stage2.update()
})

stage2.update()