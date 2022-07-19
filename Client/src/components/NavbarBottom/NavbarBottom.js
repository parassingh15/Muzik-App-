import React from "react";
import "./NavbarBottom.css";
import { useState } from "react";
import { Modal} from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import CreatePlayListModal from "../CreatePlayListModal/CreatePlayListModal";

export default function NavbarBottom() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="NavbarBottom">
      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title=  "Create PlayList"
      >
        <CreatePlayListModal/>
      </Modal>
      <div className=" NavIcon createPlaylist">
        <h4 onClick={() => setOpened(true)}>
          <i className="navTop-icon fa-solid fa-square-plus"></i>Create Playlist
        </h4>
      </div>
      <div className=" NavIcon LikedSongs">
        <h4>
          <i className="navTop-icon fa-solid fa-heart"></i>Liked Songs
        </h4>
      </div>
      <div className="LastLine"></div>

      <div className="Playlists">
        <div className="playlist-list">
          <h4>My Playlist #1</h4>
        </div>
        <div className="playlist-list">
          <h4>My Playlist #2</h4>
        </div>
      </div>
    </div>
  );
}
