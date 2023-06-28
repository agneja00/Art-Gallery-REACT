import "./PictureCard.css"
import Image from "../Images/Images"
import { Link } from "react-router-dom"

const PictureCard = ({ src, alt, title, id }) => {
    return (
        <div className="picture-card">
            <Image src={src} alt={alt} />
            <Link className="link-for-art-information" to={id.toString()}>{title}</Link>
        </div>
    )
}

export default PictureCard;