import Input from "./Input";

const Components = () => {
    return (
        <>
            <h2>Components</h2>
            <input className="myClass" readOnly />
            <p>2 + 2 = {2 + 2}</p>
            <Input />
        </>);
}

export default Components;