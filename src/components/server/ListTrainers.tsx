import { TrainerType } from './TrainerContainer';


type ListTrainersProps = {
    trainers: TrainerType[];
}

const ListTrainers = ({ trainers }: ListTrainersProps) => {
    console.log("Trainers:", trainers);


    return (
        <ul>
            {
                trainers.map(({ id, name, age, specialty }) => <li key={id}>{`Name: ${name} Age: ${age} Specialty: ${specialty}`}</li>)
            }
        </ul>);
}

export default ListTrainers;