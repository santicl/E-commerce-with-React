import { Link } from "react-router-dom";


function Island({ key, img, name, handleClick }) {
    return (
        <Link to={`/islands/${name}`} key={key} onClick={handleClick} id={name} className="Island-item">
            <img id={name} src={img} alt="Island" />
            <div id={name} className="Island-info">
                <h3 id={name}>{name}</h3>
            </div>
        </Link>
    );
}

export default Island;