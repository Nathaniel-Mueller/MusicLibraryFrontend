import React, { useState } from 'react';
import './CreateSong.css'

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
        <form className='in-line' onSubmit={handleSubmit}>
                <p>Add a song: </p>
                <input className='spacing' type='text' value={title} placeholder='Title' onChange = {(event) => setTitle(event.target.value)}/>
                <input className='spacing' type='text' value={artist} placeholder = 'Artist' onChange = {(event) => setArtist(event.target.value)}/>
                <input className='spacing' type='text' value={album} placeholder = 'Album' onChange = {(event) => setAlbum(event.target.value)}/>
                <input className='spacing' type='date' value={releaseDate} placeholder='Release Date (YYYY-MM-DD)' onChange = {(event) => setReleaseDate(event.target.value)}/>
                <input className='spacing' type='text' value={genre} placeholder = 'Genre' onChange = {(event) => setGenre(event.target.value)}/>
                <button className='spacing' type='submit'>Create Song</button>      
        </form>
     );
}
 
export default CreateSong;