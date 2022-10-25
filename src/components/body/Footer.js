import { Link } from "react-router-dom";
import TourOpen from '../../img/TourOpen.jpg';


function Footer() {
    return (
        <footer className="Footer">
            <div className="Container">
                <div className="row">
                    <div className="About-container">
                        <img src={TourOpen} />
                        <div className="About-enterprice">
                            <h4>Tienda Online - Agencia de Viajes</h4>
                            <p>La mejor agencia de viajes en Cartagena de Indias</p>
                        </div>
                    </div>
                    <div className="Links-footer">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="Address-footer">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: touropeninfo@gmail.com<a href="mailto:">

                            </a>
                        </address>
                    </div>
                </div>
                <div className="Copyright row justify-content-center">
                    <div className="col-auto">
                        <p>Copyright TourOpen, All reserved © 2022</p>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;