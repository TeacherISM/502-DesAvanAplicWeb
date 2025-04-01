
// Ejemplo de Arrow Function
const ArrowFunctionExample = () => {
    const add = (a: number, b: number) => a + b;
    return (
        <div>
            <h3>Arrow Function Example</h3>
            <p>5 + 3 = {add(5, 3)}</p>
        </div>
    );
};

// Ejemplo de Destructuring (Object)
const DestructuringObjectExample = () => {
    const user = { name: "Joseph", age: 22 };
    const { name, age } = user;
    return (
        <div>
            <h3>Destructuring Object Example</h3>
            <p>Name: {name}, Age: {age}</p>
        </div>
    );
};

// Ejemplo de Destructuring (Array)
const DestructuringArrayExample = () => {
    const colors = ["red", "green", "blue"];
    const [primary, secondary] = colors;
    return (
        <div>
            <h3>Destructuring Array Example</h3>
            <p>Primary: {primary}, Secondary: {secondary}</p>
        </div>
    );
};

// Ejemplo de Template Literals
const TemplateLiteralsExample = () => {
    const name = "Joseph";
    const message = `Hello, ${name}! Thank you for your order.`;
    return (
        <div>
            <h3>Template Literals Example</h3>
            <p>{message}</p>
        </div>
    );
};

// Ejemplo de Módulos (Simulación)
const ModulesExample = () => {
    const add = (a: number, b: number) => a + b;
    const subtract = (a: number, b: number) => a - b;

    return (
        <div>
            <h3>Modules Example</h3>
            <p>Add: 5 + 3 = {add(5, 3)}</p>
            <p>Subtract: 10 - 4 = {subtract(10, 4)}</p>
        </div>
    );
};

// Ejemplo de Callback con Arrow Functions
const CallbackExample = () => {
    const objFixed = {
        name: "Joseph",
        greet: function () {
            setTimeout(() => {
                console.log(`Hello, ${this.name}!`);
            }, 1000);
        }
    };

    objFixed.greet(); // Se ejecuta el console.log en la consola

    return (
        <div>
            <h2>Callback Example</h2>
            <p>Revisa la consola para ver el mensaje de saludo.</p>
        </div>
    );
};

// Ejemplo de Refactorización usando Template Literals y Destructuring
const RefactorExample = () => {
    const greet = ({ name, age }: { name: string, age: number }) => `Hello, ${name}! You are ${age} years old.`;
    const user = { name: "Joseph", age: 22 };

    return (
        <div>
            <h3>Refactor Example</h3>
            <p>{greet(user)}</p>
        </div>
    );
};

// Componente principal que contiene todos los ejemplos
const Examples = () => {
    return (
        <div>
            <h2>ES6+ Features Examples</h2>
            <ArrowFunctionExample />
            <DestructuringObjectExample />
            <DestructuringArrayExample />
            <TemplateLiteralsExample />
            <ModulesExample />
            <CallbackExample />
            <RefactorExample />
        </div>
    );
};

export default Examples;
