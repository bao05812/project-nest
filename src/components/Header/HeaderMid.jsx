import "../Header/HeaderMid.scss"
import Logo from "../../assets/images/logo.png"
import icon1 from '../../assets/images/icon/icon-header1.png'
import icon2 from '../../assets/images/icon/icon-header2.png'
import icon3 from '../../assets/images/icon/icon-header3.png'
import icon4 from '../../assets/images/icon/icon-header4.png'
const HeaderMid = () => {
    return (       
            <div className="container">
                <div className="headerMid flex">
                    <a href="/"><img src={Logo} alt="" /></a>
                    <form action="">
                        <input type="text" placeholder="Search for products..." />
                        <button>Search</button>
                    </form>
                    <p>Became Vendor <i class="fa-sharp fa-solid fa-arrow-right"></i></p>
                    <ul className="menu flex">
                        <p><img src={icon1} alt="" /> Compare</p>
                        <p><img src={icon2} alt="" /> Wishlist</p>
                        <p><img src={icon3} alt="" /> Cart</p>
                        <p><img src={icon4} alt="" /> Account
                            <div className="dropdown">
                                <a href="/login">Login</a>
                            </div>
                       </p>
                            
                    </ul>
                </div>
            </div>
        
    )
}
export default HeaderMid
