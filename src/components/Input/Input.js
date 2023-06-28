import "./Input.css"

const Input = ({ placeholder, type, label, onChange, id, error, value }) => {
    const onChangeEvent = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="input-container">
            <label className="label-input" htmlFor={id}>{label}</label>
            <input className={error ? "error-input" : "input"} placeholder={placeholder} type={type} onChange={onChangeEvent} id={id} value={value}/>
            {error && <p className="error">{error}</p>}
        </div>
    )
    // conditianal rendering
}

export default Input;