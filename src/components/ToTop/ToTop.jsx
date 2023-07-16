import "./ToTop.scss"

const ToTop = (props) => {
    return (
        <button className="btn-to-top" style={props.style}>
            <a href="#"><i className="fa fa-arrow-up"></i></a>
        </button>

    )
}
export default ToTop