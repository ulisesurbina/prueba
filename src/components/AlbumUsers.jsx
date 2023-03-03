import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AlbumUsers = ({ id }) => {

    const [albums, setAlbums] = useState([])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then((res) => setAlbums(res.data))
        .catch((error) => console.log(error.response))
    }, [])

    return (
        <div>
            <ul>
                    {
                        albums.map(album => (
                            <div key={album.id} className="AlbumsCard">
                                <p>{album.title}</p>
                            </div>
                        ))
                    }
            </ul>
        </div>
    );
};

export default AlbumUsers;