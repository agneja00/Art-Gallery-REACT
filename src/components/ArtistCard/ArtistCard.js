import Image from "../Images/Images"
import { Link } from "react-router-dom"

const ArtistCard = ({ src, alt, name, birthday, deathday, nationality, id }) => {
    return (
        <div className="picture-card">
            <Image src={src} alt={alt} />
            <Link className="link-for-art-information" to={id.toString()}>{name}</Link>
            <p>{birthday} - {deathday}</p>
            <p>{nationality}</p>
        </div>
    )
}

export default ArtistCard;