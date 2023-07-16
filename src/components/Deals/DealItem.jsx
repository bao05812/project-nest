const DealItem = ({ img, name, provider, oldPrice, newPrice }) => {
    return (
        <div className="cols-xl-3 cols-md-3 cols-sm-3 cols-xs-3">
            <div className="deal-item">
                <img src={img} alt="" />
                <div className="infor">
                    <p><a href="">{name}</a></p>
                    <span className="provider">
                        By <a href="">{provider}</a>
                    </span>
                    <div className="flex3">
                        <div className="price">
                            <div className="old-price">{oldPrice}</div>
                            <div className="new-price">{newPrice}</div>
                        </div>
                        <button className="btn-add">
                            <i className="fa-sharp fa-solid fa-cart-shopping"></i>Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DealItem