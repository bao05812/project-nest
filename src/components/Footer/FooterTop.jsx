import "../Footer/FooterTop.scss"
import logo from "../../assets/images/logo.png"
import logoGoogle from "../../assets/images/google-play.jpg"
import logoApp from "../../assets/images/app-store.jpg"
import visaLogo from "../../assets/images/payment-method.png"
const CompanyList = [ 
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers"
]
const AccountList = [  
    "Sign In",
    "View Cart",
    "My Wishlist",
    "Track My Order",
    "Help Ticket",
    "Shipping Details",
    "Compare products"
]
const CorporateList = [    
    "Become a Vendor",
    "Affiliate Program",
    "Farm Business",
    "Farm Careers",
    "Our Suppliers",
    "Accessibility",
    "Promotions"
]
const PopularList = [
    "Milk & Flavoured Milk",
    "Butter and Margarine",
    "Eggs Substitutes",
    "Marmalades",
    "Sour Cream and Dips",
    "Tea & Kombucha",
    "Cheese"
]

const FooterTop = () => {
    return(
        <div className="footerTop">
            <div className="footerLeft">
                    <img src={logo} alt="" />
                    <p>Awesome grocery store website template</p>
                    <p><i class="fa-solid fa-location-dot"></i> <span>Address</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                    <p><i class="fa-solid fa-headphones"></i> <span>Call Us</span> <a href="">(+91)-540-025-124553</a></p>
                    <p><i class="fa-regular fa-envelope"></i> <span>Email</span> <a href="">sale@Nest.com</a></p>
                    <p><i class="fa-regular fa-clock"></i> <span>Hours</span> 10:00 - 18:00, Mon - Sat</p>
            </div>
                    <div className="footer-center-row">
                        <p>Company</p>
                        {CompanyList.map((val) => (
                            
                           <a href={val === "About Us" ? "/about" : "" || val ==="Contact Us" ? "/contact" : ""}>{val}</a>                           
                        ))}                       
                    </div>
                    <div className="footer-center-row">
                        <p>Account</p>
                        {AccountList.map((val) => (
                           <a href="">{val}</a>                           
                        ))}                       
                    </div>
                    <div className="footer-center-row">
                        <p>Corporate</p>
                        {CorporateList.map((val) => (
                           <a href="">{val}</a>                           
                        ))}                       
                    </div>
                    <div className="footer-center-row">
                        <p>Popular</p>
                        {PopularList.map((val) => (
                           <a href="">{val}</a>                           
                        ))}                       
                    </div>
                <div className="footerRight">
                    <p>Install App</p>
                    <span>From App Store or Google Play</span>
                    <div className="flex4">
                        <img src={logoGoogle} alt="" />
                        <img src={logoApp} alt="" />
                    </div>
                    <span>Secured Payment Gateways</span>
                    <img style={{width:"224px"}} src={visaLogo} alt="" />
                </div>
        </div>
    )
}

export default FooterTop