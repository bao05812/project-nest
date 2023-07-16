import "../Footer/FooterBottom.scss"
import phonecall from "../../assets/images/phone-call.png"
const FooterBottom = () => {
    return (
        <div className="footerBottom">
            <p>© 2022, Nest – WordPress Ecommerce Template<br />All rights reserved</p>
            <div className="infocall">
            <img src={phonecall} alt="" />
                <p>1900646666<span>Working 8:00 - 22:00</span></p>
            </div>
            <div className="infocall">
                <img src={phonecall} alt="" />
                <p>1900648888<span>24/7 Support Center</span></p>
            </div>
            <div className="div">
                <div className="infosocial">
                    <p>Follow Us</p>
                    <span className="facebook"><i class="fa-brands fa-facebook-f"></i></span>
                    <span className="twitter"><i class="fa-brands fa-twitter"></i></span>
                    <span className="skype"><i class="fa-brands fa-skype"></i></span>
                    <span className="ins"><i class="fa-brands fa-instagram"></i></span>
                </div>
                <p>Up to 15% discount on your first subscribe</p>
            </div>
            
        </div>
    )
}
export default FooterBottom