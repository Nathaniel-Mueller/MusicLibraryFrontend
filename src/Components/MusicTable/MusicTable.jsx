import './MusicTable.css'

const MusicTable = (props) => {
    return ( 
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Song Title</th>
                        <th scope='col'>Artist</th>
                        <th scope='col'>Album</th>
                        <th scope='col'>Release Date</th>
                        <th scope='col'>Genre</th>
                    </tr>
                </thead>
            {props.allSongs.map((song) => {
                return (
                    <tbody>
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                    </tbody>
            )})}
            </table>
        </div>
     );
}
 
export default MusicTable;