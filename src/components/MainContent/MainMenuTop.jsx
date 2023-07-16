import './MainContent.scss'
import Card from '../Card/Card.jsx'
import CategoryListRight from "../Categories/CategoryListRight"
import BannerMenuRight from "../Banner/BannerMenuRight"
import ProductTagList from '../ProductTag/ProductTagList'
import Deals from "../Deals/DealsList"
import BannerShow from "../Banner/BannerShow"
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory'
import EleFourRows from '../EleFourRows/EleFourRows'
import product11 from "../../assets/images/product-1-1.jpg"
import product12 from "../../assets/images/product-1-2.jpg"
import product21 from "../../assets/images/product-2-1.jpg"
import product22 from "../../assets/images/product-2-2.jpg"
import product31 from "../../assets/images/product-3-1.jpg"
import product32 from "../../assets/images/product-3-2.jpg"
import product41 from "../../assets/images/product-4-1.jpg"
import product42 from "../../assets/images/product-4-2.jpg"
import product51 from "../../assets/images/product-5-1.jpg"
import product52 from "../../assets/images/product-5-2.jpg"
import product61 from "../../assets/images/product-6-1.jpg"
import product62 from "../../assets/images/product-6-2.jpg"
import product71 from "../../assets/images/product-7-1.jpg"
import product72 from "../../assets/images/product-7-2.jpg"
import product81 from "../../assets/images/product-8-1-a.jpg"
import product82 from "../../assets/images/product-8-2.jpg"
import product91 from "../../assets/images/product-9-1.jpg"
import product92 from "../../assets/images/product-9-2.jpg"
import product101 from "../../assets/images/product-10-1.jpg"
import product102 from "../../assets/images/product-10-2.jpg"
import product111 from "../../assets/images/product-11-1.jpg"
import product112 from "../../assets/images/product-11-2.jpg"
import product121 from "../../assets/images/product-12-1.jpg"
import product122 from "../../assets/images/product-12-2.jpg"
import product161 from "../../assets/images/product-16-1.jpg"
import product162 from "../../assets/images/product-16-2.jpg"
import product207 from "../../assets/images/product-20-7-min.jpg"
import product205 from "../../assets/images/product-20-5-min.jpg"
import React, { useState } from 'react'

const products = [
    {
        id: 1,
        title: "Seeds of Change Organic Red Rice",
        img1: product11,
        img2: product12,
        leftbadge: "13%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Fresh Fruit",
        provider: "NestFood",
        oldPrice: "$32.80",
        newPrice: "$28.85",
        rating: 1
    },
    {
        id: 2,
        title: "All Natural Style Chicken Meatballs",
        img1: product21,
        img2: product22,
        leftbadge: "6%",
        leftBadgeColor: "var(--blue)",
        rightbadge: "Sale",
        rightBadgeColor: "var(--color-green)",
        category: "Bread and Juice",
        provider: "NestFood",
        oldPrice: "$55.80",
        newPrice: "$52.85",
        rating: 3
    },
    {
        id: 3,
        title: "Angie's Sweet & Salty Kettle Corn",
        img1: product31,
        img2: product32,
        leftbadge: "8%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "New",
        rightBadgeColor: "var(--color-green)",
        category: "Baking material",
        provider: "Country Crock",
        oldPrice: "$52.80",
        newPrice: "$48.85",
        rating: 1
    },
    {
        id: 4,
        title: "Foster Farms Takeout Crispy Classic",
        img1: product41,
        img2: product42,
        leftbadge: "Out of Stock",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Baking material",
        provider: "Country Crock",
        oldPrice: "$19.80",
        newPrice: "$17.85",
        rating: 0
    },
    {
        id: 5,
        title: "Blue Almonds Lightly Salted Vegetables",
        img1: product51,
        img2: product52,
        leftbadge: "Out of Stock",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Fresh Fruit",
        provider: "Country Crock",
        oldPrice: "$25.80",
        newPrice: "$23.85",
        rating: 1
    },
    {
        id: 6,
        title: "Chobani Complete Vanilla Greek Yogurt",
        img1: product61,
        img2: product62,
        leftbadge: "",
        leftBadgeColor: "",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Fresh Fruit",
        provider: "Country Crock",
        oldPrice: "$55.80",
        newPrice: "$54.85",
        rating: 0
    },
    {
        id: 7,
        title: "Haagen Caramel Cone Ice Cream Boxed",
        img1: product101,
        img2: product102,
        leftbadge: "8%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Baking material",
        provider: "Hambger Hel",
        oldPrice: "$24.80",
        newPrice: "$22.85",
        rating: 5
    },
    {
        id: 8,
        title: "Gorton's Beer Battered Fish Fillets",
        img1: product91,
        img2: product92,
        leftbadge: "8%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Fresh Seafood",
        provider: "Hambger Hel",
        oldPrice: "$25.80",
        newPrice: "$23.85",
        rating: 3
    },
    {
        id: 9,
        title: "Encore Seafoods Stuffed Alaskan",
        img1: product81,
        img2: product82,
        leftbadge: "6%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Clothing & Beauty",
        provider: "Hambger Hel",
        oldPrice: "$37.80",
        newPrice: "$35.85",
        rating: 2
    },
    {
        id: 10,
        title: "Canada Dry Ginger Ale - 2 L Bottle ",
        img1: product71,
        img2: product72,
        leftbadge: "3%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Baking material",
        provider: "Hambger Hel",
        oldPrice: "$33.80",
        newPrice: "$32.85",
        rating: 4
    },
    {
        id: 11,
        title: "Extra virgin olive oil, canola oil, nonfat",
        img1: product121,
        img2: product122,
        leftbadge: "4%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Baking material",
        provider: "Totino's Pizza",
        oldPrice: "$60.00",
        newPrice: "$58.00",
        rating: 4
    },
    {
        id: 12,
        title: "Frozen vegetables broccoil, spinach",
        img1: product161,
        img2: product162,
        leftbadge: "6%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Baking material",
        provider: "Totino's Pizza",
        oldPrice: "$75.00",
        newPrice: "$71.00",
        rating: 5
    },
    {
        id: 13,
        title: "Dried fruit: apricots, figs, prunes",
        img1: product111,
        img2: product112,
        leftbadge: "27%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Baking material",
        provider: "USA Noodle Soup",
        oldPrice: "$76.80",
        newPrice: "$56.85",
        rating: 4
    },
    {
        id: 14,
        title: "Nuts almonds, cashew, pecans",
        img1: product207,
        img2: product207,
        leftbadge: "9%",
        leftBadgeColor: "#f59758",
        rightbadge: "Sale",
        rightBadgeColor: "var(--color-green)",
        category: "Baking material",
        provider: "Sneyder's-Lance",
        oldPrice: "$121.00",
        newPrice: "$111.00",
        rating: 4
    },
    {
        id: 15,
        title: "Nestle Coffee Mate Coffee Creamer",
        img1: product205,
        img2: product205,
        leftbadge: "2%",
        leftBadgeColor: "var(--color-green)",
        rightbadge: "",
        rightBadgeColor: "",
        category: "Baking material",
        provider: "Totino's Pizza",
        oldPrice: "$53.80",
        newPrice: "$52.80",
        rating: 3
    },
]

const MainMenuTop = () => {

    const [name, setName] = useState("")
    const  [isActive, setIsActive] = useState(false)
    const handBaking = (event) => {
        event.preventDefault();
        setName("Baking material")
        setIsActive(true)
    }
    const handFresh = (event) => {
        event.preventDefault();
        setName("Fresh Fruit")
        setIsActive(false)
    }
    const handMilks = (event) => {
        event.preventDefault();
        setName("Fresh Seafood")
        setIsActive(false)
    }
    const handMeat = (event) => {
        event.preventDefault();
        setName("Clothing & Beauty")
        setIsActive(false)
    }
    const handVega = (event) => {
        event.preventDefault();
        setName("Baking material")
        setIsActive(false)
    }
    return (
        <div>
            <div className="container">
                <div className="menuTopMain">
                    <div className="mainMenuLeft">
                        <div className="menuTopWeb">
                            <p>Popular Products</p>
                            <div className='menuTopCenter'>
                                <a className='active' href="#">All</a>
                                <a className={isActive ? "active" : ""} onClick={handBaking} href="#">Baking Material</a>
                                <a onClick={handFresh} href="#">Fresh Fruits</a>
                                <a onClick={handMilks} href="#">Milks & Dairies</a>
                                <a onClick={handMeat} href="#">Meats</a>
                                <a onClick={handVega} href="#">Vegatables</a>
                            </div>
                        </div>
                        <div className="main-menu-stream">
                            <div className="row">
                                {products.map(val => {
                                    if (!val.category.indexOf(name)) {                                        
                                        return <Card key={val.id} img1={val.img1} img2={val.img2}
                                            leftbadge={val.leftbadge}
                                            righBadge={val.rightbadge}
                                            leftBadgeColor={val.leftBadgeColor}
                                            rightBadgeColor={val.rightBadgeColor}
                                            title={val.title}
                                            category={val.category}
                                            provider={val.provider}
                                            oldPrice={val.oldPrice}
                                            newPrice={val.newPrice}
                                            rating={val.rating} onChange={(event) => setName(event.target.value)} />                                      
                                    }
                                })}
                            </div>
                        </div>
                        <div className="main-menu-2">
                            <Deals />
                        </div>
                    </div>
                    <div className="menu-right-category">
                        <CategoryListRight />
                        <ProductTagList />
                        <BannerMenuRight />
                    </div>
                </div>
                <div className="banner-shop-now">
                    <BannerShow />
                </div>
                <div className="ele-shop-category">
                    <ShopbyCategory />
                </div>
                <EleFourRows />
            </div>

        </div>
    )
}
export default MainMenuTop