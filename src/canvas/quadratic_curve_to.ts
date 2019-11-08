/**
 * quadraticCurveTo - 二次贝塞尔曲线
 * 
 * context.quadraticCurveTo(cpx, cpy, x, y)
 * - cpx: 控制点 x 坐标
 * - cpy: 控制点 y 坐标
 * - x: 结束点 x 坐标
 * - y: 结束点 y 坐标
 */

namespace quadraticCurveTo {
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
   * simpleCurve
   */
  ctx.fillText('Simple Curve', 20, 10)
  ctx.moveTo(20, 20)
  ctx.quadraticCurveTo(20, 100, 200, 20)
  ctx.lineTo(100, 40)
  ctx.quadraticCurveTo(60, 20, 20, 20)
  ctx.stroke()

  /**
   * wave
   */
  ctx.fillText('Wave Curve', 20, 140)
  ctx.moveTo(20, 160)
  ctx.quadraticCurveTo(40, 180, 60, 160)
  ctx.quadraticCurveTo(80, 140, 100, 160)
  ctx.quadraticCurveTo(120, 180, 140, 160)
  ctx.quadraticCurveTo(160, 140, 180, 160)
  ctx.stroke()

}
