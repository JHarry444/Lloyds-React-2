import { useState } from "react";

const State = () => {
    let defaultCount = 0;
    if (localStorage.getItem("count")) {
        defaultCount = parseInt(localStorage.getItem("count")!);
    }
    const [count, setCount] = useState(defaultCount);

    localStorage.setItem("count", String(count + 1));

    return (
        <>
            <h2>State</h2>
            <input type="number" value={count} readOnly />
            <button onClick={() => {
                setCount(oldCount => oldCount + 1);
                console.log(count);
            }}>+1</button>
        </>
    );
}

export default State;