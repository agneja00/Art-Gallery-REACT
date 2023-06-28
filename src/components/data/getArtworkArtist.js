const artworkArtist = (id) => {
    return fetch(`https://api.artsy.net/api/artists?artwork_id=${id}`, {
        headers: {
            "X-Xapp-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTA2NjNmMzAwMGI4MTYzNzAiLCJleHAiOjE2ODM2Mzk4MTgsImlhdCI6MTY4MzAzNTAxOCwiYXVkIjoiNjQwYTJmYmEwNjYzZjMwMDBiODE2MzcwIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0NTExMzhhZDIxYzNjMDAwZGYwZmFhOCJ9.yKwumdL3lrVTZ3vfxJdd96B5miFwol8odOhutpTKCkQ"
        }
    })
        .then((res) => res.json())
}

export default artworkArtist;