import './Footer.css'
import logo from '../../assets/logos/logo_footer.png'

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logo} alt="Logo" />
                <p> © 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;