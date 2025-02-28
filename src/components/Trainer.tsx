import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

type TrainerProps = {
    name: string;
    age: number;
    specialty?: string;
}
// use ? to make a parameter optional

const Trainer = function ({ name, age, specialty }: TrainerProps) {
    console.log("age + 2 =", age + 2);
    const theme = useContext(ThemeContext);

    return (
        <div className={theme}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {specialty && <p>Specialty: {specialty}</p>}
            {/* {specialty ? <p>Specialty: {specialty}</p> : false} */}
        </div>
    )
}

export default Trainer;