/**
 * 基础类型的练习
 * 
 * 打开 console 查看输出结果
 */

// 布尔值
let isOK: boolean = true
console.log(isOK)

// 数字，都是浮点数哦，支持十进制、十六进制、二进制、八进制
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral)

// 字符串，支持模板字符串
let myName: string = 'zhao'
let myAge: number = 18
let myInfo: string = `My name is ${myName}, and next year my age is ${myAge + 1}`
console.log(myInfo)

// 数组
let dataList: number[] = [1, 2, 3, 4] // 在类型后面加 []
let myBooks: Array<string> = ['xiyouji', 'hongloumeng'] // 使用泛型
console.log(dataList)
console.log(myBooks)

// 元组，表示一个已知元素数量和类型的数组
let xData: [string, number]
xData = ['水浒传', 385]
console.log(`这本书的名字是《${xData[0]}》，全书共有 ${xData[1]} 页。`)