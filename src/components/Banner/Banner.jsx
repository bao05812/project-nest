import "./Banner.scss"
import Slider from "react-slick";

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
};
const Banner = () => {
    return (
        <Slider {...settings}>
            <div className=" banner-item1 bbanner ">
                <div className="container flex5">
                    <div className="BannerContent ">
                        <p>Don’t miss amazing <br /> grocery deals</p>
                        <p>Sign up for the daily newsletter</p>
                        <form id="form1" action="" method="post">
                            <input type="email" name="email" id="form1" placeholder="Your email address" required />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" banner-item2 bbanner">
                <div className="container flex5">
                    <div className="BannerContent ">
                        <p>Fresh Vegetables <br /> Big discount</p>
                        <p>Sign up for the daily newsletter</p>
                        <form id="form2" action="" method="post">
                            <input type="text" name="email" id="form2" placeholder="Your email address" required />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </Slider>
    )
}
export default Banner
