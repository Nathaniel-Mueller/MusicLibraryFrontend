import React, { useState } from 'react';

const CreateSong = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    function handleSubmit (event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        } 
        props.addNewSong(newSong)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input type='text' value={title} placeholder='Title' onChange = {(event) => setTitle(event.target.value)}/>
                <label>Artist: </label>
                <input type='text' value={artist} placeholder = 'Artist' onChange = {(event) => setArtist(event.target.value)}/>
                <label>Album: </label>
                <input type='text' value={album} placeholder = 'Album' onChange = {(event) => setAlbum(event.target.value)}/>
                <label>Release Date: </label>
                <input type='text' value={releaseDate} placeholder='YYYY-MM-DD' onChange = {(event) => setReleaseDate(event.target.value)}/>
                <label>Genre: </label>
                <input type='text' value={genre} placeholder = 'Genre' onChange = {(event) => setGenre(event.target.value)}/>
                <button type='submit'>Create Song</button>
            </div>
                
        </form>
     );
}
 
export default CreateSong;