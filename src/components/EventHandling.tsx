const EventHandling = () => {


    function sum(a: number, b: number) {
        return a + b;
    }
    function handleClick() {
        alert("yo!");
    }
    return (
        <>
            <h2>Event Handling</h2>
            <p>{sum(1, 2)}</p>
            <button onClick={handleClick}>CLICK ME!</button>
            <button onClick={() => alert("yo!")}>CLICK ME!</button>
        </>);
}

export default EventHandling;