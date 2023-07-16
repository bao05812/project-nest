import iconcategory1 from "../../assets/images/category-1.png"
import iconcategory2 from "../../assets/images/category-2.png"
import iconcategory3 from "../../assets/images/category-3.png"
import iconcategory4 from "../../assets/images/category-4.png"
import iconcategory5 from "../../assets/images/category-5.png"
import iconcategory6 from "../../assets/images/category-6.png"
import iconcategory7 from "../../assets/images/category-7.png"
import iconcategory8 from "../../assets/images/category-8.png"
import iconcategory9 from "../../assets/images/category-9.png"
import iconcategory10 from "../../assets/images/category-10.png"
import iconcategory11 from "../../assets/images/category-11.png"
import ShopbyCateItem from "../ShopbyCategory/ShopbyCateItem"
import "./ShopbyCategory.scss"
import Slider from "react-slick";


const settings = {
  
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    autoplay: true,
    cssEase: "linear",
    focusOnSelect: true,


};
const listShopCate = [
    {
        img: iconcategory1,
        name: "Milk and Dairies",
        item: 5
    },
    {
        img: iconcategory2,
        name: "Wines & Alcohol",
        item: 4
    },
    {
        img: iconcategory3,
        name: "Clothing & Beauty",
        item: 4
    },
    {
        img: iconcategory4,
        name: "Pet Foods & Toy",
        item: 2
    },
    {
        img: iconcategory5,
        name: "Packaged fast food",
        item: 11
    },
    {
        img: iconcategory6,
        name: "Baking material",
        item: 11
    },
    {
        img: iconcategory7,
        name: "Vegetables & tubers",
        item: 6
    },
    {
        img: iconcategory8,
        name: "Fresh Seafood",
        item: 5
    },
    {
        img: iconcategory9,
        name: "Noodles Rice",
        item: 11
    },
    {
        img: iconcategory10,
        name: "Fastfood",
        item: 11
    },
    {
        img: iconcategory11,
        name: "Ice Cream",
        item: 8
    }
]
const ShopbyCategory = () => {
    return (

        <div className="shop-by-category">
            <div className="menu-shop-category">
                <p>Shop by Categories</p>
                <a href="">All Categories <i class="fa-solid fa-chevron-right"></i></a>
            </div>

            <Slider {...settings}>
                {listShopCate.map((val) => (
                    <ShopbyCateItem key={val} img={val.img} name={val.name} item={val.item} />
                ))}
            </Slider>
        </div>

    )
}

export default ShopbyCategory