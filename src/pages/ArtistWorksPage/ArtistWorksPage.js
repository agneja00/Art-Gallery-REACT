import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import getArtist from "../../components/data/getArtist"
import getSimilarArtists from "../../components/data/getSimilarArtists";
import getArtworks from "../../components/data/getArtworks";
import ArtistCard from "../../components/ArtistCard/ArtistCard"
import ArtistInformationCard from "../../components/ArtistInformationCard/ArtistInformationCard";
import PictureCard from "../../components/PictureCard/PictureCard";
import Grid from "../../components/Grid/Grid"
import Topic from "../../components/Topic/Topic";

const ArtistWorksPage = () => {

    const [artist, setArtist] = useState()
    const [artistWorks, setArtistWorks] = useState()
    const [similarArtists, setSimilarArtist] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    const handleLoadArt = async () => {
        setLoading(true)
        await getArtist(id).then((artistData) => {
            setArtist(artistData)
            console.log(artistData)
            // console.log(artworkData)
        });
        await getSimilarArtists(id).then((similarArtistsData) => {
            setSimilarArtist(similarArtistsData._embedded.artists)
            console.log(similarArtistsData)
        })
        await getArtworks(id).then((artworksArtistsData) => {
            setArtistWorks(artworksArtistsData._embedded.artworks)
            console.log(artworksArtistsData)
        })

        setLoading(false)
    }

    useEffect(() => {
        handleLoadArt()
    }, [])



    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {!loading && (<div>
                <h1 className="art-page-title">{artist?.name}</h1>
                <div className="art-container">
                    <ArtistInformationCard src={artist?._links.image.href.replace("{image_version}", "large")} alt={artist?.slug} name={artist?.name} birthday={artist?.birthday} deathday={artist?.deathday} nationality={artist?.nationality} />
                </div>
                <Topic />
                <Grid columns={3}>
                    {artistWorks?.map((artistWork) => {
                        return <PictureCard src={artistWork?._links.image.href.replace("{image_version}", "tall")} alt={artistWork?.slug} to={artistWork?.id} name={artistWork?.name} title={artistWork?.title} id={artist.id} key={artist.title + artist.id} />
                    })}
                </Grid>
                <h2 className="similar-title">Similar Artist:</h2>
                <Grid columns={3}>
                    {similarArtists?.map((artist) => {
                        return <ArtistCard src={artist?._links.image.href.replace("{image_version}", "tall")} alt={artist?.slug} to={artist?.id} name={artist?.name} birthday={artist?.birthday} deathday={artist?.deathday} nationality={artist?.nationality} id={artist.id} key={artist.title + artist.id} />
                    })}
                </Grid>
            </div>
            )}

        </div>
    )
}

export default ArtistWorksPage;