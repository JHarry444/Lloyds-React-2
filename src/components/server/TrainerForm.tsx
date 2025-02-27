import React, { useState } from "react";
import { TrainerType } from "./TrainerContainer";

type TrainerFormProps = {
    setTrainers: React.Dispatch<React.SetStateAction<TrainerType[]>>
}

const TrainerForm = ({ setTrainers }: TrainerFormProps) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [specialty, setSpecialty] = useState("");

    const handleSubmit = function (event: React.FormEvent) {
        event.preventDefault(); // stops the form from refreshing the page

        setTrainers((trainers: TrainerType[]) => {
            const newArray = [];

            for (let i = 0; i < trainers.length; i++) {
                newArray.push(trainers[i]);
            }

            newArray.push({
                name, age, specialty
            });

            return newArray;
        })

        // setTrainers((trainers: TrainerType[]) => [...trainers, { name, age, specialty }])
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameInput">Name</label>
            <input type="text" name="name" id="nameInput" value={name}
                onChange={(event) => setName(event.target.value)} />
            <br />
            <label htmlFor="ageInput">Age</label>
            <input type="text" name="age" id="ageInput" value={age} onChange={(event) => setAge(parseInt(event.target.value))} />
            <br />
            <label htmlFor="specialtyInput">Specialty</label>
            <input type="text" name="Specialty" id="specialtyInput" value={specialty} onChange={(event) => setSpecialty(event.target.value)} />
            <br />
            <button>Add</button>
        </form>
    );
}

export default TrainerForm;