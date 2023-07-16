import bannerShow1 from "../../assets/images/banner-1.png"
import bannerShow2 from "../../assets/images/banner-2.png"
import bannerShow3 from "../../assets/images/banner-3.png"
import BannerShowList from "../Banner/BannerShowList"
import "../Banner/BannerShow.scss"
const list = [
    {
        img: bannerShow1,
        status: "Everyday Fresh & Clear with Out Products"
    },
    {
        img: bannerShow2,
        status: "Make your Breakfast Healthy and Easy"
    },
    {
        img: bannerShow3,
        status: "The Best Orgnanic Product Online"
    },
]
const BannerShow = () => {
    return (
        <div className="banner-show">
            {list.map((val) => (
                <BannerShowList key={val+1} img={val.img} status={val.status} />
            ))}
        </div>
    )
}
export default BannerShow