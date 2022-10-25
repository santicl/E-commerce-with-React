import SubscribeImage from '../../img/isla-fuerte.jpg';

function Subscribe() {
    return (
        <div className="Subscribe">
            <img src={SubscribeImage} />
            <form>
                <div className="Subscribe__container">
                    <div className="Subscribe__container__text">
                        <h1>Subscribete a nuestra newsletter</h1>
                        <p>Obten promociones y descuentos de TourOpen</p>
                    </div>
                    <div className="Subscribe__container__form">
                        <input type="email" placeholder=" ejemplo@gmail.com" required/>
                        <button>Subscribete</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Subscribe;