import ProductTagItem  from "./ProductTagItem"
import "./ProductTag.scss"
const productlist = [
    "Brown", "Coffes", "Cream", "Hodo Foods", "Meats", "Organic", "Snack", "Vegetables"
]
const ProductTagList = () => {
    return (
        <ul className="productTagRight">
            <p>Product Tags</p>
            {productlist.map((val, index) => (
                <ProductTagItem key={index} content={val} />
            ))}
        </ul>
    )
}
export default ProductTagList