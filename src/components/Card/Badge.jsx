import "./Badge.scss"

const Badge = ({isLeft, content, ...props}) => {
    const style = isLeft
    ? {
        left: 0,
        borderTopLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        } 
        : {
            right: 0,
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            }
    return (
        <span className="badge-card" style={{...style,...props.style}}>
            {content}
        </span>
    )
}
export default Badge