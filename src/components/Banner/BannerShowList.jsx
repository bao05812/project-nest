const BannerShowList = ({ img, status }) => {
    return (
        <div className="cols-xs-12 cols-md-4 cols-sm-4 cols-xl-4">
            <div className="banner-article">
                <img src={img} alt="" />
                <p>{status}</p>
                <a className="banner-a-active" href="">Show Now <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

    )
}
export default BannerShowList