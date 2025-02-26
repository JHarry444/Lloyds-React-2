type TrainerProps = {
    name: string;
    age: number;
    specialty: string;
}

const Trainer = function ({ name, age, specialty }: TrainerProps) {
    console.log("age + 2 =", age + 2);

    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
        </>
    )
}

export default Trainer;