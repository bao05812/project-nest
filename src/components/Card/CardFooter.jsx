import card1 from "../../assets/images/icon-1.png"
import card2 from "../../assets/images/icon-2.png"
import card3 from "../../assets/images/icon-3.png"
import card4 from "../../assets/images/icon-4.png"
import card5 from "../../assets/images/icon-5.png"
import "../Card/CardFooter.scss"
const CardFooter = () => {
    return (
        <div className="container">
            <div className="card-footer">
                <div className="row">
                    <div className="cols-xl-2 cols-md-2 cols-sm-2 cols-xs-2">
                        <div className="card-item">
                            <img src={card1} alt="" />
                            <div className="infor">
                                <a href="/login">Best prices & offers</a>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="cols-xl-2 cols-md-2 cols-sm-2 cols-xs-2">
                        <div className="card-item">
                            <img src={card2} alt="" />
                            <div className="infor">
                                <a href="/login">Free delivery</a>
                                <p>24/7 amazing services</p>
                            </div>
                        </div>
                    </div>
                    <div className="cols-xl-2 cols-md-2 cols-sm-2 cols-xs-2">
                        <div className="card-item">
                            <img src={card3} alt="" />
                            <div className="infor">
                                <a href="/login">Great daily deal</a>
                                <p>When you sign up</p>
                            </div>
                        </div>
                    </div>
                    <div className="cols-xl-2 cols-md-2 cols-sm-2 cols-xs-2">
                        <div className="card-item">
                            <img src={card4} alt="" />
                            <div className="infor">
                                <a href="/login">Wide assortment</a>
                                <p>Mega Discounts</p>
                            </div>
                        </div>
                    </div>
                    <div className="cols-xl-2 cols-md-2 cols-sm-2 cols-xs-2">
                        <div className="card-item">
                            <img src={card5} alt="" />
                            <div className="infor">
                                <a href="/login">Easy returns</a>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardFooter