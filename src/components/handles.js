import { Add1, Add10, Reset, Subtract1, Subtract10, Random } from "./formular";

const handleAdd1 = ({ count, setCount }) => {
    const addedBy1 = Add1(count)
    setCount(addedBy1)
};

const handleAdd10 = ({ count, setCount }) => {
    const addedBy10 = Add10(count)
    setCount(addedBy10)
};

const handleReset = ({ count, setCount }) => {
    // setCount(0)
    Reset(setCount)
};

const handleSubtract1 = ({ count, setCount }) => {
    const subtractedBy1 = Subtract1(count)
    setCount(subtractedBy1)
};

const handleSubtract10 = ({ count, setCount }) => {
    const subtractBy10 = Subtract10(count)
    setCount(subtractBy10)
};

const handleRandom = ({ count, setCount }) => {
    const randomlyGenerated = Random()
    setCount(randomlyGenerated)
};

export { handleAdd1, handleAdd10, handleReset, handleSubtract1, handleSubtract10, handleRandom };