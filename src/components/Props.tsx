import Trainer from "./Trainer";

const Props = () => {
    return (
        <>
            <section>
                <h2>Props</h2>
                <Trainer name="Jordan" age={30} specialty="Java" />
                <Trainer name="Cameron" age={32} specialty="JS" />
                <Trainer name="Piers" age={28} specialty="DevOps" />
            </section>
        </>
    );
}

export default Props;