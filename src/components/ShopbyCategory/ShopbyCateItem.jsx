

const ShopbyCateItem = ({img, name, item}) => {
    return (
        <div className="card-shop-category">
            <img src={img} alt="" />
           <a href="">{name}</a>
            <span>{item} items</span>
        </div>
    )
}

export default ShopbyCateItem