import { jSXText, assertDeclareTypeAlias } from "babel-types"

/**
 * tween.js - 动画数据计算
 * 
 */

namespace tweenjs {
  /**
   * 初始化
   * - canvas: 画布对象
   * - ctx: 画布 2d 绘图上下文
   * - 全屏绘画，并且动态调整画布尺寸
   */
  const body = <HTMLElement>document.querySelector('body')
  const canvas = <HTMLCanvasElement>document.getElementById("myCanvas")
  const ctx = canvas.getContext('2d')

  function canvasResize () {
    canvas.width = body.clientWidth
    canvas.height = body.clientHeight
  }
  
  canvasResize()
  window.onresize = canvasResize

  /**
   * 绘图函数
   */
  var distance = 0
  var stepSize = 1
  function drawLine (): void {
    let startY = 20
    ctx.clearRect(20 + distance, startY, 10, 1)
    distance += stepSize
    if (distance >= 300) {
      distance = 0
    }
    ctx.fillRect(20 + distance, startY, 10, 1)

    requestAnimationFrame(drawLine)
  }
  
  drawLine()

  /**
   * 使用 tween.js 实现动画
   */
  var coods = {x: 20, y: 40}
  const tween = new TWEEN.Tween(coods)
                            .to({x: 300, y: 40}, 1000)
                            .easing(TWEEN.Easing.Bounce.Out)
                            .repeat(Infinity)
                            .start()
  function tweenLine (): void {
    ctx.clearRect(Math.ceil(coods.x), coods.y, 10, 1)
    requestAnimationFrame(tweenLine)
    TWEEN.update()
    ctx.fillRect(Math.ceil(coods.x), coods.y, 10, 1)
  }
  tweenLine()
}
