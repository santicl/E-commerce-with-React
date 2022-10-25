import settings from "../../settings";
import Island from "./component/Island";

function Islands() {

    const handleClick = ({ target }) => {
        const island = target.id
        console.log(island);
    }


    return (
        <div className='Islands-container'>
            <div className='Islands-container_title'>
                <h2>Por Islas</h2>
                <div className='Island-cant'>
                    <span>8</span>
                    <span className='Island'>Islas</span>
                </div>
            </div>
            <div className="islands">
                {
                    settings.islands.map(isla => {
                        return (
                            <Island
                                key={isla.name}
                                img={isla.img}
                                name={isla.name}
                                handleClick={handleClick}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Islands;