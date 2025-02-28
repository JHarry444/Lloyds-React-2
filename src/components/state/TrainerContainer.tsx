import { useState } from "react";
import ListTrainers from "./ListTrainers";
import TrainerForm from "./TrainerForm";

export type TrainerType = {
    name: string;
    age: number;
    specialty: string;
}


const TrainerContainer = () => {

    const [trainers, setTrainers] = useState<TrainerType[]>([
        {
            name: "Jordan",
            age: 30,
            specialty: "Java"
        },
        {
            name: "Cameron",
            age: 32,
            specialty: "JS"
        }
    ]);

    return (
        <>
            <h2>Lifting State</h2>
            <div>
                <TrainerForm setTrainers={setTrainers} />
            </div>
            <div>
                <ListTrainers trainers={trainers} />
            </div>
        </>);
}

export default TrainerContainer;