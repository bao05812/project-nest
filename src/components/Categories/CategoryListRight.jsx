import CategoryItemRight from "./CategoryItemRight.jsx"
import "./CategoryList.scss"
import category9 from "../../assets/images/category-9.png"
import category8 from "../../assets/images/category-8.png"
import category4 from "../../assets/images/category-4.png"
import category6 from "../../assets/images/category-6.png"
import category10 from "../../assets/images/category-10.png"
import category7 from "../../assets/images/category-7.png"
import category1 from "../../assets/images/category-1.png"
import category3 from "../../assets/images/category-3.png"
import category11 from "../../assets/images/category-11.png"
import category2 from "../../assets/images/category-2.png"
const categories = [
    {
        name: "Wines & Drinks",
        img: category9,
        badge: "4"
    },
    {
        name: "Vegetables",
        img: category8,
        badge: "6"
    },
    {
        name: "Uncategorized",
        img: "",
        badge: "15"
    },
    {
        name: "Pet Foods & Toy",
        img: category4,
        badge: "2"
    },
    {
        name: "Milks & Dairies",
        img: category6,
        badge: "5"
    },
    {
        name: "Fresh Seafood",
        img: category10,
        badge: "5"
    },
    {
        name: "Fresh Fruit",
        img: category7,
        badge: "10"
    },
    {
        name: "Deals Of The Day",
        img: category1,
        badge: "4"
    },
    {
        name: "Clothing & beauty",
        img: category3,
        badge: "4"
    },
    {
        name: "Bread and Juice",
        img: category11,
        badge: "8"
    },
    {
        name: "Baking material",
        img: category2,
        badge: "11"
    },
]


const CategoryListRight = () =>{
    return (
        <ul className="ListRightCategory">
            <p>Category</p>
            {categories.map((val) => (
                    <CategoryItemRight key={val+1} img={val.img} name={val.name} badge={val.badge} />
                ))}  
        </ul>

    )
}


export default CategoryListRight