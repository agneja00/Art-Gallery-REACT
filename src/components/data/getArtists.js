const getArtists = () => {

    return fetch("https://api.artsy.net/api/artists?artworks=true&total_count=1&size=9", {
        headers: {
            "X-Xapp-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTA2NjNmMzAwMGI4MTYzNzAiLCJleHAiOjE2ODM2Mzk4MTgsImlhdCI6MTY4MzAzNTAxOCwiYXVkIjoiNjQwYTJmYmEwNjYzZjMwMDBiODE2MzcwIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0NTExMzhhZDIxYzNjMDAwZGYwZmFhOCJ9.yKwumdL3lrVTZ3vfxJdd96B5miFwol8odOhutpTKCkQ"
        }
    })
        .then((res) => res.json())
    // fetch - uzklausa, kuri padaro jsona 
}


export default getArtists;