import Image from "../Images/Images";

const ArtistInformationCard = ({ src, alt, name, birthday, deathday, nationality }) => {
    return (
    <div className="artist-container">
        <Image src={src} alt={alt} />
        <h2 className="bold-text">About author:</h2>
        <h2>{name}</h2>
        <span className="bold-text">Birthday - Deathday:</span>
        <p>{birthday} {"-"} {deathday}</p>
        <span className="bold-text">Nationality:</span>
        <p>{nationality}</p>
    </div>
    )
}

export default ArtistInformationCard;