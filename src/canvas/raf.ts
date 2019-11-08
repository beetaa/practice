/**
 * requestAnimationFrame - 动画
 * 
 * context.quadraticCurveTo(cpx, cpy, x, y)
 * - cpx: 控制点 x 坐标
 * - cpy: 控制点 y 坐标
 * - x: 结束点 x 坐标
 * - y: 结束点 y 坐标
 */

namespace raf {
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

  var x = 20

  function tick(): void {
    if (x > 300) {
      x = 20
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
      ctx.clearRect(x - 2, 20, 20, 20)
      ctx.fillRect(x, 20, 20, 20)
      x += 2
    }
    

    requestAnimationFrame(tick)
  }

  tick()
}
