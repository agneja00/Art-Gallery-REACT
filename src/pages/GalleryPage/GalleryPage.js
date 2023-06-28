import "./GalleryPage.css"
import Topic from "../../components/Topic/Topic";
import Grid from "../../components/Grid/Grid";
import PictureCard from "../../components/PictureCard/PictureCard";
import Input from "../../components/Input/Input";
import { useState, useEffect } from 'react';
import Button from "../../components/Button/Button";
import getImages from "../../components/data/getImages";


const GalleryPage = () => {

    const [artList, setArtList] = useState();
    const [artWorks, setArtWorks] = useState([])
    const [errMessage, setErrorMessage] = useState()
    const [loading, setLoading] = useState(false)
    const [nextLoading, setNextLoading] = useState(false)

    const handleLoad = async () => {
        setLoading(true)

        try {
            const data = await getImages();
            setArtList(data)
            setArtWorks([...artWorks, ...data._embedded.artworks]) // i array idedami pradiniai duomenys
        } catch (_) {
            setErrorMessage("Something is wrong!")
        }
        setLoading(false)
    }
    console.log(artList)

    const changePage = () => {
        setNextLoading(true)
        fetch(artList._links.next?.href, {
            headers: {
                "X-Xapp-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTA2NjNmMzAwMGI4MTYzNzAiLCJleHAiOjE2ODM2Mzk4MTgsImlhdCI6MTY4MzAzNTAxOCwiYXVkIjoiNjQwYTJmYmEwNjYzZjMwMDBiODE2MzcwIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0NTExMzhhZDIxYzNjMDAwZGYwZmFhOCJ9.yKwumdL3lrVTZ3vfxJdd96B5miFwol8odOhutpTKCkQ"
            }
        })
            .then((res) => res.json())
            .then((artData) => {
                setArtList(artData)
                setArtWorks([...artWorks, ...artData._embedded.artworks]) // i array idedami prie pradiniu next duomenys
            })
            .finally(() => setNextLoading(false))

    }

    useEffect(() => {
        // setLoading(true)
        // getImages()
        //     .then((imageData) => setArtList(imageData))
        //     // .catch((err) => setErrorMessage("Something went wrong!"));
        //     .finally(() => setLoading(false))
        handleLoad()
    }, [])


    return (
        <>
            <div className="search">
                <Input type="text" placeholder="Search artwork..." />
                <Button label="Search" />
            </div>
            <Topic title="Collection" text="Reflecting a broad range of styles and ideas, the collection introduces viewers to the main processes and developments in art of the last 60 years. The collection is continually supplemented with new and relevant works of Lithuanian art." />
            {errMessage && <h1>{errMessage}</h1>}
            {loading && <div>
                <h1>Loading...</h1>
                <Button label="Loading..." />
            </div>}
            {!loading && (
                <Grid columns={3}>
                    {artWorks.map((artwork) => {
                        return <PictureCard src={artwork._links.image.href.replace("{image_version}", "medium")} alt={artwork.slug} to={artwork.id} title={artwork.title} id={artwork.id} key={artwork.title + artwork.id} />
                    })}
                    {nextLoading ? <Button label="Loading..." /> : <Button onClick={changePage} label="Load next 9" />}
                </Grid>
            )}
        </>
    )
}

export default GalleryPage;