import styles from './Grid.module.css'

const styleMap = {
    1: styles.one,
    2: styles.two,
    3: styles.three,
    4: styles.four,
    5: styles.five,
    6: styles.six,
    7: styles.seven,
    8: styles.eight,
    9: styles.nine,
    10: styles.ten,
    11: styles.eleven,
    12: styles.twelve,
};



const Grid = ({ children, columns = 3, className = "" }) => {
    return (
        <div className={`${styles.root} ${styleMap[columns]} ${className}`}>{children}</div>
    )
}

export default Grid;