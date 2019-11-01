declare namespace cax {
  function tick (job: Function): Function

  class EventDispatcher {
    constructor ()
    on (type: string, listener: Function, useCapture?: boolean): Function
  }

  class DisplayObject extends EventDispatcher {
    constructor ()
    x: number
    y: number
  }

  class Graphics extends DisplayObject {
    constructor ()
  }

  class Shape extends Graphics {
    constructor ()
  }

  interface ShapeOption {
    fillStyle?: string
    strokeStyle?: string
    [propName: string]: any
  }

  class Rect extends Shape {
    constructor (width: number, height: number, option: ShapeOption)
    width: number
    height: number
    option: ShapeOption
  }

  class Group extends DisplayObject {
    constructor (data?: any)
    children: Array<any>
    add (child: any): void
    addChildAt (child: any, index: number): void
    removeChildAt (index: number): void
    remove (child: any): void
    replace (current: any, pre: any): void
    empty (): void
    destroy (): void
  }

  class Stage extends Group {
    constructor (width: number, height: number, selector: string)
    disableMoveDetection: false
    moveDetectionInterval: number
    update (): void
    on (type: string, fn: Function): Function
  }
}