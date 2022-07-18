import React from 'react'
import './NavbarBottom.css'

export default function NavbarBottom() {
  return (
    <div className='NavbarBottom'>
        <div className=" NavIcon createPlaylist">
            <h4><i className="navTop-icon fa-solid fa-square-plus"></i>Create Playlist</h4>
        </div>
        <div className=" NavIcon LikedSongs">
            <h4><i className="navTop-icon fa-solid fa-heart"></i>Liked Songs</h4>
        </div>
        <div className='LastLine'>
            
        </div>

        <div className="Playlists">
            <div className='playlist-list'>
                <h4>My Playlist #1</h4>
            </div>
            <div className='playlist-list'>
                <h4>My Playlist #2</h4>
            </div>
        </div>
    </div>
  )
}
