import "./index.css";

export default ({className, onClick, text}) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}