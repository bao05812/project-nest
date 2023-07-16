const CategoryItemRight = ({ name, img, badge}) => {
    return(
        <li>
            <a href="">
                <div className="flex4">
                {img && <img src={img} alt="" /> }
                <span>{name}</span>
                </div>
                
                <p className="badgeMenuRight">{badge}</p>
            </a>
        </li>
    )
}
export default CategoryItemRight