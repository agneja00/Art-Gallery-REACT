import "./ArtWorkPage.css"
import PictureCard from "../../components/PictureCard/PictureCard";
import ArtistInformationCard from "../../components/ArtistInformationCard/ArtistInformationCard";
import Grid from "../../components/Grid/Grid";
import openArt from "../../components/data/getArtId";
import artworkArtist from "../../components/data/getArtworkArtist";
import getSimilarArt from "../../components/data/getSimilarArtwork";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtWorkPage = () => {

    const [artWork, setArtWork] = useState()
    const [artist, setArtist] = useState()
    const [similarArt, setSimilarArt] = useState()
    const [loading, setLoading] = useState(false)
    const [selectedDimensions, setSelectedDimensions] = useState("centimeters")
    const { id } = useParams();

    const handleLoadArt = async () => {
        setLoading(true)
        await openArt(id).then((artworkData) => {
            setArtWork(artworkData)
            // console.log(artworkData)
        });
        await artworkArtist(id).then((artistData) => {
            setArtist(artistData._embedded.artists[0])
            console.log(artistData)
        });
        await getSimilarArt(id).then((similarArtData) => {
            setSimilarArt(similarArtData._embedded.artworks)
            // console.log(similarArtData)
        })
        setLoading(false)
    }

    useEffect(() => {
        handleLoadArt()
    }, [])

    const handleSelect = (event) => {
        const select = event.target.value;
        setSelectedDimensions(select)
    }


    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {!loading && (<div>
                <h1 className="art-page-title">Art Work Page</h1>
                <div className="art-container">
                    <img className="image" src={artWork?._links.image.href.replace("{image_version}", "large")} alt={artWork?.slug} />
                    <div className="info-about-art">
                        <h2 className="bold-text">Title:</h2>
                        <h2>{artWork?.title}</h2>
                        <span className="bold-text">Date:</span>
                        <p>{artWork?.date}</p>
                        <span className="bold-text">Category:</span>
                        <p>{artWork?.category}</p>
                        <span className="bold-text">Medium:</span>
                        <p>{artWork?.medium}</p>
                        <span className="bold-text">Artwork Dimensions:</span>
                        <select name="dimensions" value={selectedDimensions} onChange={handleSelect}>
                            <option value="centimeters">Centimeters</option>
                            <option value="inches">Inches</option>
                        </select>
                        <p>
                            {selectedDimensions === "centimeters"
                                ? artWork?.dimensions.cm.text
                                : artWork?.dimensions.in.text}
                        </p>
                        <span className="bold-text">Collecting institution:</span>
                        <p>{artWork?.collecting_institution}</p>
                    </div>
                    <div className="artist-container">
                    <ArtistInformationCard src={artist?._links.image.href.replace("{image_version}", "large")} alt={artist?.slug} name={artist?.name} birthday={artist?.birthday} deathday={artist?.deathday} nationality={artist?.nationality} />
                    </div>
                </div>
                <h2 className="similar-title">Similar Artworks:</h2>
                
                <Grid columns={3}>
                    {similarArt?.map((artwork) => {
                        return <PictureCard src={artwork?._links.image.href.replace("{image_version}", "normalized")} alt={artwork?.slug} to={artwork?.id} title={artwork?.title} id={artwork.id} key={artwork.title + artwork.id} />
                    })}
                </Grid>
            </div>
            )}

        </div>
    )
}

export default ArtWorkPage;