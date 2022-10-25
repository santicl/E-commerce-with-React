import getStarsReviews from "../../helpers/getStarsReviews";

function Stars(props) {
    const { rank } = props;
    const stars = getStarsReviews(rank);

    return (
        <div className="Stars">
            {
                stars.map((star, index) => {
                    return (
                        <span key={index}>
                            {star}
                        </span>
                    );
                })
            }
        </div>
    );
}

export default Stars;
