import { useState } from "react";
import ListTrainers from "./ListTrainers";
import TrainerForm from "./TrainerForm";

export type TrainerType = {
    name: string;
    age: number;
    specialty: string;
}


const TrainerContainer = () => {

    const [trainers, setTrainers] = useState<TrainerType[]>([]);

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