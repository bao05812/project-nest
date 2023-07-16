import deal1 from "../../assets/images/banner-5-min.png"
import deal2 from "../../assets/images/banner-6-min.png"
import deal3 from "../../assets/images/banner-7-min.png"
import deal4 from "../../assets/images/banner-8-min.png"
import DealItem from "../Deals/DealItem"
import "./Deals.scss"
const listDeals = [
    {
        img: deal1,
        name: "Organic Cage Grade A Large Eggs",
        provider: "Hambger Hel",
        oldPrice: "$24.00",
        newPrice: "$21.00",
    },
    {
        img: deal2,
        name: "Naturally Flavored Cinnamon Vanilla",
        provider: "Hambger Hel",
        oldPrice: "$55.00",
        newPrice: "$51.00",
    },
    {
        img: deal3,
        name: "Seed of Change Organic Watermelon",
        provider: "Hambger Hel",
        oldPrice: "$66.00",
        newPrice: "$61.50",
    },
    {
        img: deal4,
        name: "Nestle Coffee Mate Coffee Creamer",
        provider: "Totino's Pizza",
        oldPrice: "$53.00",
        newPrice: "$52.80",
    },
]
const Deals = () => {
    return (
        <div className="dealsContent">
            <div className="dealMenuTop">
                <p>Deals of The Day</p>
                <a href="">All Deals <i class="fa-solid fa-chevron-right fa-xs"></i></a>
            </div>
            <div className="row">
                {listDeals.map((val) => (
                    <DealItem key={val+12} img= {val.img} name={val.name} provider={val.provider} oldPrice={val.oldPrice} newPrice={val.newPrice} />
                ))}
            </div>
        </div>
    )
}

export default Deals