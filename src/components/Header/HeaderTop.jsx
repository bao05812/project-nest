import "../Header/HeaderTop.scss"
import Slider from "react-slick";

const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
    //   verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      speed: 100,
      autoplaySpeed: 2000,
      cssEase: "linear",
      adaptiveHeight: true
};
const HeaderTop = () => {
    return (

        <div className="container">
            <div className="headerTop flex">
                <div className="headerTopLeft">
                    <a href="/about">About us</a>
                    <a href="/login">My Account</a>
                    <a href="">Wistlist</a>
                    <a href="">Order Tracking</a>
                </div>
                <div className="headerTopCenter">
                    <p>100% Secure delivery without contacting the courier <br/>
                        Supper Value Deals - Save more with coupons <br/>
                        Trendy 25silver jewelry, save up 35% off today</p>
                </div>
                <ul className="headerTopRight">
                    <li className="headerCall"><p>Need help? Call Us:<span>+1800900122</span></p></li>
                    <li className="bbb">
                        <p>Englist <i class="fa-solid fa-chevron-down fa-2xs"></i></p>
                        <ul className="headerTopRight_dropdown">
                            <li><a href=""><i class="fa-regular fa-image"></i>Français</a></li>
                            <li><a href=""><i class="fa-regular fa-image"></i>Deutch</a></li>
                            <li><a href=""><i class="fa-regular fa-image"></i>PycckNÑ</a></li>
                        </ul>
                    </li>
                    <li  className="ccc">
                        <p>INR <i class="fa-solid fa-chevron-down fa-2xs"></i></p>
                        <div className="headerTopRight_dropdown">
                            <a href=""><i class="fa-regular fa-image"></i> USD</a>
                            <a href=""><i class="fa-regular fa-image"></i> MBP</a>
                            <a href=""><i class="fa-regular fa-image"></i> EU</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    )
}
export default HeaderTop