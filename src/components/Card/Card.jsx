import "./Card.scss"
import Badge from "./Badge.jsx"

const Card = ({ img1, img2,
    leftbadge,
    leftBadgeColor,
    righBadge,
    rightBadgeColor,
    title,
    category,
    provider,
    oldPrice,
    newPrice,
    rating }) => {
    return (
  
            <div className="cols-xl-2 cols-md-2 cols-sm-3 cols-xs-6">
                <div className="card">
                    {leftbadge && <Badge isLeft content={leftbadge} style={{ background: leftBadgeColor }} />}
                    {righBadge && <Badge content={righBadge} style={{ background: rightBadgeColor }} />
                    }
                    <div className="card-image">
                        <img className="card-img1" src={img1} alt="" />
                        <img className="card-img2" src={img2} alt="" />

                        <div className="card-image-actions">
                            <div className="icon">
                                <i class="fa-solid fa-eye"></i>
                                <span className="popover">Quick view</span>
                            </div>

                            <div className="icon">
                                <i class="fa-solid fa-shuffle"></i>
                                <span className="popover">Compare</span>
                            </div>

                            <div className="icon">
                                <i class="fa-regular fa-heart"></i>
                                <span className="popover">Wishlist</span>
                            </div>
                        </div>
                    </div>
                    <a className="cate" href="">{category}</a>
                    <div>
                        <a className="title" href="">{title}</a>
                    </div>
                    <div className="rating flex4">
                        {[...Array(5)].map((val, index) => {
                            return index <= rating - 1 ?
                                (<i key={index} className="fa-solid fa-star active"></i>) :
                                (<i key={index} className="fa-regular fa-star"></i>)
                        })}
                        <span>{rating}</span>
                    </div>
                    <div className="provider flex4">
                        By <a>{provider}</a>
                    </div>
                    <div className="flex3">
                        <div className="price flex2 a-end">
                            <div className="new-price">{newPrice}</div>
                            <div className="old-price">{oldPrice}</div>
                        </div>
                        <button className="btn-add">
                            <i className="fa-sharp fa-solid fa-cart-shopping"></i>Add
                        </button>
                    </div>
                </div>
            </div>
    )
}
export default Card 