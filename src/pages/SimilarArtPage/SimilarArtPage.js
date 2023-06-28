import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import openArt from "../../components/data/getArtId"
import artworkArtist from "../../components/data/getArtworkArtist"

const SimilarArtWorkPage = () => {
    const [artWork, setArtWork] = useState()
    const [artist, setArtist] = useState()
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
            // console.log(artistData)
        });
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
                        <h2>Title:</h2>
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
                        <h2>Author:</h2>
                        <h2>{artist?.name}</h2>
                        <span className="bold-text">Birthday - Deathday:</span>
                        <p>{artist?.birthday} {"-"} {artist?.deathday}</p>
                        <span className="bold-text">Nationality:</span>
                        <p>{artist?.nationality}</p>
                    </div>
                </div>
            </div>
            )}

        </div>
    )
}

export default SimilarArtWorkPage;