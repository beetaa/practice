function greeter(content: string) {
  return `你好，${content}`
}

let content:string = "Typescript"

document.body.innerHTML = greeter(content)