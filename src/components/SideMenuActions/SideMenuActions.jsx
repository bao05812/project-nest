import docs2 from "../../assets/images/logo_slide2.jpg"
import docs from "../../assets/images/logo_slide.jpg"
import "./SideMenuActions.scss"

const SideMenuActions = (props) => {
    return (
        <div className="sidemenu-actions" style={props.style}>
            <button>
            <img src={docs} alt="" />
                <span className="infor">Docs</span>
            </button>
            <button>
                <img src={docs2} alt="" />
                <span className="infor infor2">Support</span>
            </button>
        </div>
    )
}
export default SideMenuActions