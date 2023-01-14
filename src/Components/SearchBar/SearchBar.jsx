import React, { useState } from 'react';
import './SearchBar.css'


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
        <form className = 'in-line' onSubmit={handleSubmit}>
            <p>Find a song:</p>
            <div className='in-line'>
                <input className='spacing' type='text' value={title} placeholder='Title' onChange = {(event) => setTitle(event.target.value)}/>
                <input className='spacing' type='text' value={artist} placeholder = 'Artist' onChange = {(event) => setArtist(event.target.value)}/>
                <input className='spacing' type='text' value={album} placeholder = 'Album' onChange = {(event) => setAlbum(event.target.value)}/>
                <input className='spacing' type='date' value={releaseDate} placeholder='Release Date (YYYY-MM-DD)' onChange = {(event) => setReleaseDate(event.target.value)}/>
                <input className='spacing' type='text' value={genre} placeholder = 'Genre' onChange = {(event) => setGenre(event.target.value)}/>
                <button className='spacing' type='submit'>Search</button>
            </div>
        </form>
)}
 
export default SearchBar;