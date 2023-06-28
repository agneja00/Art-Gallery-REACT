import { useState } from "react"
import getSearchArtist from "../data/getSearchArtist";
import Input from "../Input/Input";
import Button from "../Button/Button";
// import { FaSearch } from "react-icons/fa";

const SearchBar = (value) => {
    const [artists, setArtists] = useState("")
    const [artistName, setArtistName] = useState('')

    const fetchData = (value, key) => {
        return fetch(`https://api.artsy.net/api/search?q=${key}`, {
            headers: {
                "X-Xapp-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTA2NjNmMzAwMGI4MTYzNzAiLCJleHAiOjE2ODM2Mzk4MTgsImlhdCI6MTY4MzAzNTAxOCwiYXVkIjoiNjQwYTJmYmEwNjYzZjMwMDBiODE2MzcwIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0NTExMzhhZDIxYzNjMDAwZGYwZmFhOCJ9.yKwumdL3lrVTZ3vfxJdd96B5miFwol8odOhutpTKCkQ"
            }
        })
            .then((response) => response.json())
            .then((artists) => {
                setArtists(artists)
                const results = artists.filter((artist) => {
                    return (
                        value &&
                        artist &&
                        artist.name &&
                        artist.name.toLowerCase().includes(value)
                    );
                });
                console.log(results);

                const filteredArtists = artists.filter(artist => {
                    return artist.name.toLowerCase().startsWith(value.toLowerCase())
                })
                console.log(filteredArtists)
            });
    };

    // const handleChange = (value) => {
    //     setInput(value);
    //     fetchData(value);
    // };

    // const filteredArtists = artists.filter(artist => {
    //     return artist.name.toLowerCase().startsWith(value.toLowerCase())
    // })

    const searchHandle = () => {
        setArtistName(value)

    }

    const setResult = async () => {
        const result = await getSearchArtist();
        if (result) {
            setArtists(result)
        }
    }

    // const filteredArtists = result.filter((artist) => {
    //     return (
    //         artist?.name.toLowerCase().startsWith(value.toLowerCase())
    //     )
    // })


    return (
        <>
            <div className="search">
                <Input type="text" placeholder="Search artist..." onChange={fetchData} />
                <Button type="submit" label="Search" onClick={setResult} />
            </div>
            <div>
                {artists.map((filteredArtist) => {
                    return <div key={filteredArtist?.name}>{filteredArtist?.name}</div>
                })}
            </div>
        </>
    )
}

export default SearchBar;