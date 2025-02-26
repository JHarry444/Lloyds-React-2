import trainers from "../data/trainers.json";
import Trainer from "./Trainer";
import { v4 as uuidv4 } from 'uuid';

type TrainerType = {
    name: string;
    age: number;
    specialty: string;
}

const ExternalData = () => {
    console.log("Trainers:", trainers);

    // debugger; can use debugger to instruct the browser when to pause execution and enter debug mode

    return (<>
        {/* {
            trainers.map(function (trainer) {
                return <Trainer name={trainer.name} age={trainer.age} specialty={trainer.specialty} />
            })
        } */}
        {
            trainers
                .filter(trainer => trainer.specialty.toLowerCase() !== "devops")
                .map(({ name, age, specialty }: TrainerType) =>
                    <Trainer key={uuidv4()} name={name} age={age} specialty={specialty} />
                )
        }
    </>);
}

export default ExternalData;