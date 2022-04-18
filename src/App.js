import "./App.css";
import { useState, useEffect } from "react";
import { TextField, Box, Button, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as types from "./redux/actionTypes";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(null);

  const photos = useSelector((state) => state.data.photos);

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  };

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.FETCH_PHOTO_START, query });
  }, [dispatch, query]);

  return (
    <div className="App">
      <h2>Redux-Saga test</h2>
      <Box
        component="form"
        
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          style={{ margin: "0px" }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          style={{ width: "80px", height: "50px", margin: "0px" }}
          onClick={updateSearch}
        >
          Primary
        </Button>

        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{marginTop: '10px'}}
        >
          {photos &&
            photos.map((item, index) => (
              <Grid key={index} item xs={2} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.thumbnailUrl}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
      {/* {photos && photos && photos.map((item) => <h4>{item.title}</h4>)} */}
    </div>
  );
}

export default App;
