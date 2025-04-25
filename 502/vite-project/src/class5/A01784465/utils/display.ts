import {
    greetUser,
    arrowThisDemo,
    destructureExample,
    templateExample
  } from './features'
  
  export function showES6Examples(containerId: string) {
    const container = document.getElementById(containerId)
    if (!container) return
  
    const examples = [
      greetUser({ name: "Charlie", age: 25 }),
      arrowThisDemo(),
      destructureExample(),
      templateExample()
    ]
  
    const list = document.createElement("ul")
    examples.forEach((ex) => {
      const li = document.createElement("li")
      li.textContent = ex
      list.appendChild(li)
    })
  
    container.appendChild(list)
  }
  