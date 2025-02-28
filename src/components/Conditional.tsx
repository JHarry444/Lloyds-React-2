import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

type CondtionalProps = {
    bool: boolean
}

const Conditional = ({ bool }: CondtionalProps) => {
    const theme = useContext(ThemeContext);

    if (bool) {
        return <p className={theme}>TRUE!</p>;
    } else {
        return <p className={theme}>False</p>
    }

    return bool ? <p>TRUE!</p> : <p>False</p>;
}

export default Conditional;