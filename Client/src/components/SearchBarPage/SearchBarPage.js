import React from "react";
import "./SearchBarPage.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function SearchBarPage() {


  return (
    <div className="SearchBarPage">
      <div className="searchBarDiv">
        <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            name="SearchBox"
            id="search"
          />
        </div>
      </div>
      <div className="searchedItemDiv">
        <h3>Your Search Results</h3>
      </div>
      <div className="AllSearchedSongs">
        <div className="SongsList-Playlist">
          <List
            sx={{ width: "98%", background: "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)", borderRadius: "10px"}}
          >
            <ListItem className="list" alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Save Your Tears"
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Save Your Tears"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Weeknd
                    </Typography>      
                </React.Fragment>
                }
              />
              <FavoriteBorderIcon
              sx={{ marginRight: "20px", marginTop: "15px"}}/>
              <p style={{marginRight: "20px", marginTop: "15px"}}> 2:55 </p>
              <MoreHorizIcon sx={{ marginRight: "20px", marginTop: "15px"}}/>
              
            </ListItem>
            

          </List>
          
        </div>

        <div className="SongsList-Playlist">
          <List
            sx={{ width: "98%", background: "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)" , borderRadius: "10px"}}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Blinding Lights" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Blinding Lights"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Weeknd
                    </Typography>
                  </React.Fragment>
                }
              />
              <FavoriteIcon
              sx={{ marginRight: "20px", marginTop: "15px", color: "red"}}/>
              <p style={{marginRight: "20px", marginTop: "15px"}}> 3:12 </p>
              <MoreHorizIcon sx={{ marginRight: "20px", marginTop: "15px"}}/>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
