import { useEffect, useState } from "react";
import ListTrainers from "./ListTrainers";
import TrainerForm from "./TrainerForm";
import axios from "axios";

export type TrainerType = {
    id?: string;
    name: string;
    age: number;
    specialty: string;
}


const TrainerContainer = () => {

    const [filter, setFilter] = useState("");
    const [trainers, setTrainers] = useState<TrainerType[]>([]);

    const fetchTrainers = () => {
        fetch("http://localhost:8080/trainers")
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    return res.json();
                } else {
                    // error handling
                }
            })
            .then(json => {
                console.log("JSON:", json);
                setTrainers(json);
            }).catch(err => console.error(err));
    }

    // const fetchTrainers = () => {
    //     axios.get("http://localhost:8080/trainers")
    //         .then(res => {
    //             console.log("JSON:", res.data);
    //             setTrainers(res.data);
    //         }).catch(err => console.error(err));
    // }

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        const myInterval = setInterval(fetchTrainers, 5_000);
        // if you return a function then it'll be called when the component is unmounted
        // typically used to remove intervals, websockets, etc
        return () => {
            console.log("COMPONENT UNMOUNTED");

            return clearInterval(myInterval);
        }
    }, []);

    // will only run the fetch when my component is mounted
    // useEffect(function () {
    // fetchTrainers();
    // }, []);

    // will run the fetch when my component is mounted OR when the value of filter changes
    useEffect(() => {
        console.log("FILTER CHANGED");
        fetchTrainers();
    }, [filter]);

    return (
        <>
            <h2>Use Effect</h2>
            <div>
                <TrainerForm setTrainers={setTrainers} />
            </div>
            <div>
                <input type="text" placeholder="filter" value={filter} onChange={e => setFilter(e.target.value)} />
                <ListTrainers trainers={trainers.filter(trainer => trainer.name.toLowerCase().startsWith(filter.toLowerCase()))} />
            </div>
        </>);
}

export default TrainerContainer;