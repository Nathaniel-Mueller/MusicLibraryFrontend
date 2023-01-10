import React, { useState } from 'react';


const SearchBar = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    function handleSubmit (event){
        event.preventDefault();
            let foundSong = {
                title: title,
                artist: artist,
                album: album,
                release_date: releaseDate,
                genre: genre,
        } 
        props.findSong(foundSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Search: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='text' value={title} placeholder='Title' onChange = {(event) => setTitle(event.target.value)}/></td>
                        <td><input type='text' value={artist} placeholder = 'Artist' onChange = {(event) => setArtist(event.target.value)}/></td>
                        <td><input type='text' value={album} placeholder = 'Album' onChange = {(event) => setAlbum(event.target.value)}/></td>
                        <td><input type='text' value={releaseDate} placeholder='Release Date (YYYY-MM-DD)' onChange = {(event) => setReleaseDate(event.target.value)}/></td>
                        <td><input type='text' value={genre} placeholder = 'Genre' onChange = {(event) => setGenre(event.target.value)}/></td>
                        <td><button type='submit'>Search</button></td>
                    </tr>
                </tbody>

            </table>
        </form>
)}
 
export default SearchBar;