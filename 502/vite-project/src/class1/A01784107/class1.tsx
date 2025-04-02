import React from 'react';

// Arrow Functions Example
const ArrowFunctionExample = () => {
    const add = (a: number, b: number) => a + b;
    const result = add(2, 3);

    return (
        <div>
            <h2>Arrow Functions</h2>
            <p>Result of 2 + 3 = {result}</p>
        </div>
    );
};

// Destructuring Example
const DestructuringExample = () => {
    const user = { name: "Joseph", age: 22 };
    const { name, age } = user;

    const colors = ["red", "green", "blue"];
    const [primary, secondary] = colors;

    return (
        <div>
            <h2>Destructuring</h2>
            <p>Name: {name}, Age: {age}</p>
            <p>Primary Color: {primary}, Secondary Color: {secondary}</p>
        </div>
    );
};

// Template Literals Example
const TemplateLiteralsExample = () => {
    const user = { name: "Joseph", age: 22 };
    const message = `Hello, ${user.name}! You are ${user.age} years old.`;

    return (
        <div>
            <h2>Template Literals</h2>
            <p>{message}</p>
        </div>
    );
};

// Modules Example
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

const ModulesExample = () => {
    const sum = add(5, 3);
    const difference = subtract(5, 3);

    return (
        <div>
            <h2>Modules</h2>
            <p>5 + 3 = {sum}</p>
            <p>5 - 3 = {difference}</p>
        </div>
    );
};

const ExamplesComponent: React.FC = () => {
    return (
        <div>
            <ArrowFunctionExample />
            <DestructuringExample />
            <TemplateLiteralsExample />
            <ModulesExample />
        </div>
    );
};

export default ExamplesComponent;
