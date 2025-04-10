// Arrow function + Template Literals + Destructuring
export const greetUser = ({ name, age }: { name: string, age: number }): string =>
    `Hello, ${name}! You are ${age} years old.`
  
  export const arrowThisDemo = (): string => {
    const obj = {
      name: "Alice",
      greet: function () {
        setTimeout(() => {
          console.log(`Arrow this: Hello, ${this.name}!`)
        }, 500)
        return `Waiting to greet ${this.name}...`
      }
    }
    return obj.greet()
  }
  
  export const destructureExample = (): string => {
    const team = {
      lead: { name: "Leo", email: "leo@example.com" },
      size: 4
    }
    const { lead: { name } } = team
    return `Team lead: ${name}`
  }
  
  export const templateExample = (): string => {
    const product = "JS Book"
    const price = 29.99
    return `You bought "${product}" for $${price}.`
  }
  