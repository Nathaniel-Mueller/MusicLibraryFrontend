import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import CreateSong from './Components/CreateSong/CreateSong';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs()
  }, []);

  async function addNewSong (song) {
    let tempSong = [...songs, song]
    setSongs(tempSong)
    await axios.post('http://127.0.0.1:8000/api/music/', {
      title: song.title,
      artist: song.artist,
      album: song.album,
      release_date: song.release_date,
      genre: song.genre,
    })
  }

  async function getSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/')
    console.log(response.data)
    setSongs(response.data)
  }

  async function findSong(song){

    const response = await axios.get(`http://127.0.0.1:8000/api/music/`)
    const songsFound = response.data.filter(function (songInDatabase){
      if (song.title === songInDatabase.title)
        return true;
        else if (song.artist === songInDatabase.artist)
        return true;
      else if (song.album === songInDatabase.album)
        return true;
      else if (song.release_date === songInDatabase.release_date)
        return true;
      else if (song.genre === songInDatabase.genre)
        return true;
      else console.log(`${songInDatabase.title} is not in the results`)
    })
    setSongs(songsFound)
    console.log(songsFound)
  }

  return (
    <div>
      <SearchBar findSong = {findSong} />
      <MusicTable allSongs = {songs} />
      <CreateSong addNewSong = {addNewSong} />
    </div>
  );
}

export default App;
