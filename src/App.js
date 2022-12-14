import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs()
  }, []);

  async function getSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/')
    console.log(response.data)
    setSongs(response.data)
  }

  async function findSong(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/3/')
    setSongs(response.data)
    console.log(response.data)
  }

  return (
    <div>
      <button onClick={() => getSongs()}>Get all Songs</button>
      <button onClick={()=> findSong()}>test</button>
    </div>
  );
}

export default App;
