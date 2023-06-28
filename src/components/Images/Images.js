import styles from './Images.module.css'

const Image = ({ src, alt, onChange}) => {
    return (
        <div className={styles.root}>
            <img className={styles.image} src={src} alt={alt} onChange={onChange}/>
        </div>
    )
}

export default Image;