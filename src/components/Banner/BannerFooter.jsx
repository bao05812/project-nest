import "../Banner/BannerFooter.scss"
import banner911 from "../../assets/images/banner-9-min.png"
const BannerFooter = () => {
    return(
        <div className="banner-footer container">
            <div className="content-banner">
                <p>Stay home & get your daily <br/>needs from our shop</p>
                <span>Start Your Daily Shopping with <span style={{color: "var(--color-green)"}}>Nest Mart</span></span>
                <form action="">
                    <input type="email" name="" id="1" placeholder="Your email address" />
                    <button>Subscribe</button>
                </form>
            </div>
            <img src={banner911} alt="" />
        </div>
    )
}

export default BannerFooter