import useCounter from "../../../hooks/useCounter";

function CounterComponent() {
    const { dd, hh, minsToday, sec } = useCounter();
    return (
        <div className="Counter-container">
            <div className="Counter-days">
                <div className="Counter-days_number">
                    <span> {dd} </span>
                </div>
                <span className="Letter">
                    Days
                </span>
            </div>

            <div className="Counter-hours">
                <div className="Counter-hours_number">
                    <span> {hh} </span>
                </div>
                <span  className="Letter">
                    Hours
                </span>
            </div>

            <div className="Counter-mins">
                <div className="Counter-mins_number">
                    <span> {minsToday} </span>
                </div>
                <span className="Letter">
                    Mins
                </span>
            </div>

            <div className="Counter-secs">
                <div className="Counter-secs_number">
                    <span> {sec} </span>
                </div>
                <span className="Letter">
                    Secs
                </span>
            </div>
        </div>
    );
}

export default CounterComponent;