import "./TextArea.css"

const TextArea = ({ placeholder, label, onChange, id, error, value }) => {
    return (
            <div className="textarea">
                <label className="label-textarea" htmlFor={id}>{label}</label>
                <textarea className={error ? "error-area" : "area"} placeholder={placeholder} onChange={onChange} id={id} value={value}/>
                {error && <p className="error-textarea">{error}</p>}
            </div>
        )
   
}

export default TextArea;