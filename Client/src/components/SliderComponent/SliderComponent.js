import React from "react";
import "./SliderComponent.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Login from "../../img/login.PNG";

export default function SliderComponent() {
  return (
    <div className="SliderComponent">
      <h2 className="SliderComponentHeading SongComponentHeading">
        Trending Songs
      </h2>
      <div className="Sub-SliderComponent">
        <div className="card">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="SliderComponent_card_1">
                <div className="SliderComp_1">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn_1">
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="card">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="SliderComponent_card_1">
                <div className="SliderComp_1">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn_1">
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="card">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="SliderComponent_card_1">
                <div className="SliderComp_1">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn_1">
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="card">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="SliderComponent_card_1">
                <div className="SliderComp_1">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn_1">
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
