import "./ArtistsPage.css"
import { useState, useEffect } from "react";
import Topic from "../../components/Topic/Topic";
import Button from "../../components/Button/Button";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Grid from "../../components/Grid/Grid";
import getArtists from "../../components/data/getArtists";
import SearchBar from "../../components/SearchBar/SearchBar";

const ArtistsPage = () => {

    const [artistsList, setArtistsList] = useState();
    const [artists, setArtArtists] = useState([])
    const [errMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [nextLoading, setNextLoading] = useState(false)

    const handleLoadArtists = async () => {
        setLoading(true)

        try {
            const data = await getArtists();
            setArtistsList(data)
            setArtArtists([...artists, ...data._embedded.artists]) // i array idedami pradiniai duomenys
        } catch (_) {
            setErrorMessage("Something is wrong!")
        }
        setLoading(false)
    }
    console.log(artistsList)

    const changePage = () => {
        setNextLoading(true)
        fetch(artistsList._links.next?.href, {
            headers: {
                "X-Xapp-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTA2NjNmMzAwMGI4MTYzNzAiLCJleHAiOjE2ODM2Mzk4MTgsImlhdCI6MTY4MzAzNTAxOCwiYXVkIjoiNjQwYTJmYmEwNjYzZjMwMDBiODE2MzcwIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0NTExMzhhZDIxYzNjMDAwZGYwZmFhOCJ9.yKwumdL3lrVTZ3vfxJdd96B5miFwol8odOhutpTKCkQ"
            }
        })
            .then((res) => res.json())
            .then((artistsData) => {
                setArtistsList(artistsData)
                setArtArtists([...artists, ...artistsData._embedded.artists]) // i array idedami prie pradiniu next duomenys
            })
            .finally(() => setNextLoading(false))

    }

    useEffect(() => {
        // setLoading(true)
        // getImages()
        //     .then((imageData) => setArtList(imageData))
        //     // .catch((err) => setErrorMessage("Something went wrong!"));
        //     .finally(() => setLoading(false))

        handleLoadArtists()
    }, [])

    return (
        <>
            <SearchBar />
            <Topic title="Collection" text="Reflecting a broad range of styles and ideas, the collection introduces viewers to the main processes and developments in art of the last 60 years. The collection is continually supplemented with new and relevant works of Lithuanian art." />
            {errMessage && <h1>{errMessage}</h1>}
            {loading && <div>
                <h1>Loading...</h1>
                <Button label="Loading..." />
            </div>}
            {!loading && (
                <Grid columns={3}>
                    {artists.map((artist) => {
                        return <ArtistCard src={artist?._links.image.href.replace("{image_version}", "tall")} alt={artist?.slug} name={artist?.name} birthday={artist?.birthday} deathday={artist?.deathday} nationality={artist?.nationality} id={artist?.id} key={artist?.name + artist?.id} />
                    })}
                    {nextLoading ? <Button label="Loading..." /> : <Button onClick={changePage} label="Load next 9" />}
                </Grid>
            )}
        </>
    )
}

export default ArtistsPage;