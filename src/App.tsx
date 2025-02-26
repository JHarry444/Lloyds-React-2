import Input from "./components/Input";
import Trainer from "./components/Trainer";

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
      </section>
      <section>
        <h2>Props</h2>
        <Trainer name="Jordan" age={30} specialty="Java" />
        <Trainer name="Cameron" age={32} specialty="JS" />
        <Trainer name="Piers" age={28} specialty="DevOps" />
      </section>
    </>
  );
}

export default App