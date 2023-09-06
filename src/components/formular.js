
const Add1 = (count) => {
    const add1 = count + 1;
    return add1;
}

const Add10 = (count) => {
    const add10 = count + 10;
    return add10;
}

const Reset = (setCount) => {
    setCount(0);
}

const Subtract1 = (count) => {
    const subtract1 = count - 1;
    return subtract1;
}

const Subtract10 = (count) => {
    const subtract10 = count - 10;
    return subtract10;
}

const Random = () => {
    const random = Math.floor(Math.random() * 1000);
    return random;
}

export {Add1, Add10, Reset, Subtract1, Subtract10, Random};