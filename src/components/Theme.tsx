import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Theme = () => {
    const theme = useContext(ThemeContext);
    return (<p>The current theme is: {theme}</p>);
}

export default Theme;