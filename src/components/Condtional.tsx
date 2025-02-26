type CondtionalProps = {
    bool: boolean
}

const Conditional = ({ bool }: CondtionalProps) => {
    // if (bool) {
    //     return <p>TRUE!</p>;
    // } else {
    //     return <p>False</p>
    // }

    return bool ? <p>TRUE!</p> : <p>False</p>;
}

export default Conditional;