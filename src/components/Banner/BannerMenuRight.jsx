import '../Banner/BannerMenuRight.scss'
import bannerMnRight from "../../assets/images/banner-11-min.png"
const BannerMenuRight = () => {
    return (
        <div className="bannermenu-right">
            <span>Organic</span>
            <p>Save 17% <br /> on <span>Oganic</span> <br/> Juice</p>
            <img src={bannerMnRight} alt="" />
        </div>
    )
}
export default BannerMenuRight