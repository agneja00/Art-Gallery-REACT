import "./Topic.css"

const Topic = ({ title, text, children }) => {
    return (
        <div className="topic">
            <h1>{title}</h1>
            <p>{text}</p>
            {children}
        </div>
    )
}

export default Topic;