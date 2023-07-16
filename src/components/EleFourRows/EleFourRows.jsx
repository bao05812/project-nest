import product21 from "../../assets/images/product-2-1.jpg"
import product31 from "../../assets/images/product-3-1.jpg"
import product91 from "../../assets/images/product-9-1.jpg"
import product202 from "../../assets/images/product-20-2-min.jpg"
import product161 from "../../assets/images/product-16-1.jpg"
import product11 from "../../assets/images/product-1-1.jpg"
import product51 from "../../assets/images/product-5-1.jpg"
import product204 from "../../assets/images/product-20-4-min.jpg"
import "../EleFourRows/EleFourRows.scss"
const topSellList = [{
    img: product21,
    title: "All Natural Style Chicken Meatballs",
    rating: 3,
    newPrice: "$52.85",
    oldPrice: "$55.80"
},
{
    img: product31,
    title: "Angie’s Sweet & Salty Kettle Corn",
    rating: 0,
    newPrice: "$48.85",
    oldPrice: "$52.80"
},
{
    img: product91,
    title: "Gorton’s Beer Battered Fish Fillets",
    rating: 0,
    newPrice: "$23.85",
    oldPrice: "$25.80"
}
]

const trendingProductsList = [{
    img: product202,
    title: "Seeds of Change Organic Watermelon",
    rating: 3,
    newPrice: "$61.50",
    oldPrice: "$66.00"
},
{
    img: product161,
    title: "Frozen vegetables broccoli, spinach",
    rating: 1,
    newPrice: "$48.85",
    oldPrice: "$52.80"
},
{
    img: product91,
    title: "Gorton’s Beer Battered Fish Fillets",
    rating: 4,
    newPrice: "$23.85",
    oldPrice: "$25.80"
}
]

const recentlyAddedList = [
    {
    img: product11,
    title: "Seeds of Change Organic Red Rice",
    rating: 1,
    newPrice: "$28.85",
    oldPrice: "$32.80"
},
{
    img: product21,
    title: "All Natural Style Chicken Meatballs",
    rating: 3,
    newPrice: "$52.85",
    oldPrice: "$55.80"
},
{
    img: product31,
    title: "Angie’s Sweet & Salty Kettle Corn",
    rating: 1,
    newPrice: "$48.85",
    oldPrice: "$52.80"
}
]

const topRatedList = [{
    img: product21,
    title: "All Natural Style Chicken Meatballs",
    rating: 3,
    newPrice: "$52.85",
    oldPrice: "$55.80"
},
{
    img: product51,
    title: "Blue Almonds Lightly Salted Vegetables",
    rating: 1,
    newPrice: "$23.85",
    oldPrice: "$25.80"
},
{
    img: product204,
    title: "Organic Cage Grade A Large Eggs",
    rating: 1,
    newPrice: "$21.00",
    oldPrice: "$24.00"
}
]
function EleRow({ title, img, oldPrice, newPrice, rating }) {
    
    return (
       <div className="ele-top-selling">
            <img src={img} alt="" />
            <div className="infor">
                <a href="">{title}</a>
                <div className="rating flex4">
                    {[...Array(5)].map((val, index) => {
                        return index <= rating - 1 ?
                            (<i key={index} className="fa-solid fa-star active"></i>) :
                            (<i key={index} className="fa-regular fa-star"></i>)
                    })}
                    <span>{rating}</span>
                </div>
                <div className="price">
                    <div className="new-price">{newPrice}</div>
                    <div className="old-price">{oldPrice}</div>
                </div>
                
            </div>
       </div>
    )
}
const EleFourRows = () => {
    return (
        <div className="ele-four-rows">
            <div className="ele-4-row">
                <p>Top Selling</p>
                {topSellList.map((val) => (
                    <EleRow key={val} img={val.img} title={val.title} newPrice={val.newPrice} oldPrice={val.oldPrice} rating={val.rating} />
                ))}
            </div>
            <div className="ele-4-row">
                <p>Trending Products</p>
                {trendingProductsList.map((val) => (
                    <EleRow key={val} img={val.img} title={val.title} newPrice={val.newPrice} oldPrice={val.oldPrice} rating={val.rating} />
                ))}
            </div>
            <div className="ele-4-row">
                <p>Recently added</p>
                {recentlyAddedList.map((val) => (
                    <EleRow key={val} img={val.img} title={val.title} newPrice={val.newPrice} oldPrice={val.oldPrice} rating={val.rating} />
                ))}
            </div>
            <div className="ele-4-row">
                <p>Top Rated</p>
                {topRatedList.map((val) => (
                    <EleRow key={val} img={val.img} title={val.title} newPrice={val.newPrice} oldPrice={val.oldPrice} rating={val.rating} />
                ))}
            </div>
        </div>
    )
}

export default EleFourRows