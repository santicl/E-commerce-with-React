import getDateFinal from "../helpers/getDateFinal";
import { useState, useEffect } from "react";

function useCounter() {
    const [finalDate, setFinalDate] = useState({});

    useEffect(() => {
        setInterval(() => {
            const date = getDateFinal({ day: 12, sec: 20, hours: 0, mins: 0, month: 12 });
            setFinalDate(date);
        }, 1000);
    }, []);

    return finalDate;
}

export default useCounter;