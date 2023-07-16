import "../Header/HeaderBottom.scss"
import { Link } from 'react-router-dom'
import banner2_dropdown from "../../assets/images/banner3_dropdown.png"
import banner3_dropdown from "../../assets/images/bannerheader2.png"
import CategoryList from "../Categories/CategoryList"

import { Fragment, useEffect, useState, useLayoutEffect, useRef } from "react"

const listHome = [
    "Home1", "Home2", "Home3", "Home4", "Home5", "Home6", "Home7", "Home8", "Home9" 
]

const listShop = [
    {
        title: "Product Style",
        product: ["Product Style One",
            "Product Style Two",
            "Product Style Three",
            "Product Style Four",
            "Product Load More",
            "Product Infinite Scrolling",
            "Shop Wide",
            "Shop With Left Sidebar",
            "Shop With Right Sidebar",
            "Shop List Left Sidebar",
            "Shop List Right Sidebar"]
    },
    {
        title: "Product Single Style",
        product: ["Product Style One",
            "Product Style Two",
            "Product Style Three"
        ]
    },
    {
        title: "Product Single Features",
        product: ["Product With Deals Date",
            "Product With Message Box",
            "Product With Video Style One",
            "Product With Video Style Two",
            "Product Load More",
            "Product With Advertisement"]
    },
    {
        title: "Product Types",
        product: ["Simple Product",
            "Grouped Product",
            "External/Affiliate product",
            "Variable product",
            "Frequently Bought Together",
            "Product With No Sidebar",
            "Product With Left Sidebar"]
    },
]

const listMegaMenu = [
    {
        title: "Product 10% Discount",
        product: ["Canada Dry Ginger Ale - 2 L Bottle",
            "Cauliflower Species Brassica the genus",
            "Nestle Original Mate Coffee Creamer",
            "Onion hybrird varieties genus Allium",
            "Seeds of Change Organic Red Rice"
        ]
    },
    {
        title: "Product 20% Discount",
        product: ["All Natural Style Chicken Meatballs",
            "Angie's Sweet & Salty Kettle Corn Staple",
            "Blue Almonds Lightly Salted Vegetables",
            "Butter fat and protein churned cream",
            "Chobani Complete Vanilla Greek Yogurt"
        ]
    },
    {
        title: "Product 30% Discount",
        product: ["Collared Nikky Printed Men Neck T-Shirt",
            "Crabs are decapod crustaceans",
            "Encore Seafoods Stuffed the occasional",
            "Foster Farms Takeout Crispy Classic",
            "Fresh mango smoothies with a Blender"
        ]
    },

]
const listVendors = [
    "My Orders",
    "Store Details",
    "Store Listing",
    "Dashboard",
]
const listBlog = [
    "Blog Details",
    "Blog Grid",
    "Blog List",
    "Blog Big",
    "Blog Wide",
    "Single Blog"
]
const listPage = [
    "About",
    "My Account",
    "Shop Compare",
    "Shop Wishlist",
    "Shop Cart",
    "Check out",
    "Privacy Policy",
    "Refund And Returns Policy",
]

const HeaderBottom = () => {

    const categoryRef = useState()
    const [isClickdown, setClickDown] = useState(true)
    
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false); 
          } else { // if scroll up show the navbar
            setShow(true);  
          }
    
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      };
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);
    const handleClick = () => {
        const opacity = categoryRef.current.style.opacity
        if (!opacity || opacity == 0) {
            categoryRef.current.style.opacity = 1;
            categoryRef.current.style.visibility = "visible";
            setClickDown(false)
        } else {
            categoryRef.current.style.opacity = 0;
            categoryRef.current.style.visibility = "hidden";
            setClickDown(true)
        }
    }
    return (
        <div className="container">
            <div className="HeaderBottom flex">
            {/* <div className={`HeaderBottom flex active2 ${show && 'hidden'}`}> */}
                <div className="menuBarLeft flex">
                    <button onClick={handleClick} className="dropbtn">
                        <i className="fa-solid fa-border-all"></i> Browse All Categories <i className={isClickdown ? "fa-solid fa-chevron-down fa-2xs" : "fa-solid fa-chevron-up fa-2xs"}></i>
                        <div className="dropdown-wrapper" ref={categoryRef}>
                            <CategoryList />
                        </div>
                    </button>
                    <span ><i class="fa-sharp fa-solid fa-fire"></i> Hot Deals</span>
                </div>
                <ul className="menuBarCenter">
                    <li href="/">Home <i class="fa-solid fa-chevron-down fa-2xs"></i>
                        <div className="dropdownHome">
                            {listHome.map((val) => (
                                <a key={val} href="/">{val}</a>
                            ))}
                        </div>
                    </li>
                    <li> <Link to="/about">About</Link></li>
                    <li href="">Shop <i class="fa-solid fa-chevron-down fa-2xs"></i>
                        <ul className="dropdownHome2 flex2">                           
                                <li>
                                    <p>Product Style</p>
                                    <a href="">Product Style One</a>
                                    <a href="">Product Style Two</a>
                                    <a href="">Product Style Three</a>
                                    <a href="">Product Style Four</a>
                                    <a href="">Product Load More</a>
                                    <a href="">Product Infinite Scrolling</a>
                                    <a href="">Shop Wide</a>
                                    <a href="">Shop With Left Sidebar</a>
                                    <a href="">Shop With Right Sidebar</a>
                                    <a href="">Shop List Left Sidebar</a>
                                    <a href="">Shop List Right Sidebar</a>
                                </li>
                                <li>
                                    <p>Product Single Style</p>
                                    <a href="">Product Style One</a>
                                    <a href="">Product Style Two</a>
                                    <a href="">Product Style Three</a>
                                    <a href="">Product Style Four</a>

                                    <p>Product Single Features</p>
                                    <a href="">Product With Deals Date</a>
                                    <a href="">Product With Message Box</a>
                                    <a href="">Product With Video Style One</a>
                                    <a href="">Product With Video Style Two</a>
                                    <a href="">Product With Advertisement</a>
                                </li>
                                <li>
                                    <p>Product Types</p>
                                    <a href="">Simple Product</a>
                                    <a href="">Grouped Product</a>
                                    <a href="">External/Affiliate product</a>
                                    <a href="">Variable product</a>
                                    <a href="">Frequently Bought Together</a>
                                    <a href="">Product With No Sidebar</a>
                                    <a href="">Product With Left Sidebar</a>
                                </li>
                                <li className="img-active">
                                    <img src={banner2_dropdown} alt="" />
                                    <p>Oganic</p>
                                    <span>Everyday Fresh & Clean With Our Products</span>
                                    <a href="">Shop Now</a>
                                </li>                                            
                        </ul>
                    </li>
                    <li href="">Mega Menu <i class="fa-solid fa-chevron-down fa-2xs"></i>
                        <ul className="dropdownHome2">
                            <div className="flex2">
                                <li>
                                    <p>Product 10% Discount</p>
                                    <a href="">Canada Dry Ginger Ale - 2 L Bottle</a>
                                    <a href="">Cauliflower Species Brassica the genus</a>
                                    <a href="">Nestle Original Mate Coffee Creamer</a>
                                    <a href="">Onion hybrird varieties genus Allium</a>
                                    <a href="">Seeds of Change Organic Red Rice</a>

                                </li>
                                <li>
                                    <p>Product 20% Discount</p>
                                    <a href="">All Natural Style Chicken Meatballs</a>
                                    <a href="">Angie's Sweet & Salty Kettle Corn Staple</a>
                                    <a href="">Blue Almonds Lightly Salted Vegetables</a>
                                    <a href="">Butter fat and protein churned cream</a>
                                    <a href="">Chobani Complete Vanilla Greek Yogurt</a>
                                </li>
                                <li>
                                    <p>Product 30% Discount</p>
                                    <a href="">Collared Nikky Printed Men Neck T-Shirt</a>
                                    <a href="">Crabs are decapod crustaceans</a>
                                    <a href="">Encore Seafoods Stuffed the occasional</a>
                                    <a href="">Foster Farms Takeout Crispy Classic</a>
                                    <a href="">Fresh mango smoothies with a Blender</a>

                                </li>
                                
                                <li>
                                    <img src={banner3_dropdown} alt="" />

                                    <span>Everyday Fresh &<br /> Clean With Our<br /> Products</span>
                                    <a href="">Shop Now <i class="fa-sharp fa-solid fa-arrow-right"></i></a>
                                </li>
                            </div>

                        </ul>
                    </li>
                    <li className="headerbt-vendors" href="">Vendors <i class="fa-solid fa-chevron-down fa-2xs"></i>
                        <div className="dropdownHome">
                        {listVendors.map((val) => (
                            <a key={val} href="">{val}</a>
                        ))}

                        </div>
                    </li>
                    <li href="">Blog <i class="fa-solid fa-chevron-down fa-2xs"></i>
                        <div className="dropdownHome">
                            {listBlog.map((val) => (
                                <a key={val} href="">{val}</a>
                            ))}
                        </div>
                    </li>
                    <li href="">Pages <i class="fa-solid fa-chevron-down fa-2xs"></i>
                        <div className="dropdownHome">                      
                        {listPage.map((val) => (
                                <a key={val} href="">{val}</a>
                            ))}
                        </div>
                    </li>
                    <li> <Link to="/contact">Contact</Link></li>
                </ul>

                <div className="menuBarRight flex">
                    <i class="fa-sharp fa-solid fa-headphones fa-2xl"></i>
                    <div>
                        <p>1900888123</p>
                        <span>24/7 Support Center</span>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default HeaderBottom