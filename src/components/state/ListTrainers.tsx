import { v4 as uuidv4 } from 'uuid';
import { TrainerType } from './TrainerContainer';


type ListTrainersProps = {
    trainers: TrainerType[];
}

const ListTrainers = ({ trainers }: ListTrainersProps) => {
    console.log("Trainers:", trainers);


    return (
        <ul>
            {
                trainers.map(({ name, age, specialty }) => <li key={uuidv4()}>{`Name: ${name} Age: ${age} Specialty: ${specialty}`}</li>)
            }
        </ul>);
}

export default ListTrainers;