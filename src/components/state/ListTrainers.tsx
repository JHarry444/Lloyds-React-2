import { v4 as uuidv4 } from 'uuid';
import { TrainerType } from './TrainerContainer';
import Trainer from '../Trainer';


type ListTrainersProps = {
    trainers: TrainerType[];
}

const ListTrainers = ({ trainers }: ListTrainersProps) => {
    console.log("Trainers:", trainers);


    return (
        <div>
            <h2>Trainers</h2>
            {
                trainers.map(({ name, age, specialty }) => <Trainer key={uuidv4()} name={name} age={age} specialty={specialty} />)
            }
        </div>);
}

export default ListTrainers;