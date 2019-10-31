function greeter(person: string) {
  return "Hello, " + person
}

let user = "中文"

document.body.innerHTML = greeter(user)