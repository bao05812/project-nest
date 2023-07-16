const CategoryItem = ({ name, img, badge}) => {
    return(
        <li>
            <a href="">
                {img && <img src={img} alt="" /> }
                <span>{name}</span>
                <p className="badge">{badge}</p>
            </a>
        </li>
    )
}
export default CategoryItem