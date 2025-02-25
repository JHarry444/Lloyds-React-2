import Input from "./components/Input";

function App() {

  console.log("Hi from App!");

  return (
    <>
      <h1>Hello, World!</h1>
      <p>Here's my example React Application!</p>
      <section>
        <h2>Components</h2>
        <input className="myClass" />
        <p>2 + 2 = {2 + 2}</p>
        <Input />
        <Input />
        {/* comment */}
        <Input />
        <Input />
      </section>
    </>
  );
}

export default App