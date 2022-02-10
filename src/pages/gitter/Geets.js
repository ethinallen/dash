import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

import useStyles from "./styles";


function Geets({ geets }) {
  var classes = useStyles();

  return (
    <Grid direction="column" spacing={10}>
    {geets.map((geet) => (
      <div className={classes.cardContainer}>
        <Card xs>
           <CardMedia
             component="img"
             image={geet.avatarurl}
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {geet.username}
             </Typography>
             <Typography variant="body4" color="text.secondary"><b>Repo:</b> <a href={geet.repo_url} >{geet.repo_name}</a></Typography>
             <Typography variant="body3" color="text.secondary"><b>Date:</b>{geet.date}</Typography>
             <Typography variant="body2" color="text.secondary"><b>Commit Message:</b> {geet.message}</Typography>
           </CardContent>
           <CardActions>
             <Button size="small">Share</Button>
             <Button size="small">Learn More</Button>
           </CardActions>
         </Card>
       </div>
    ))}

     </Grid>
  )
};

export default Geets;


/*
<Card>
  <CardMedia
    component="img"
    height="300px"
    image="https://cdn.andrewemery.io/bkg.png"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Andrew Emery
    </Typography>
    <Typography variant="body4" color="text.secondary">Repo: Testing</Typography>
    <Typography variant="body3" color="text.secondary"><b>Date:</b>Testing</Typography>
    <Typography variant="body2" color="text.secondary"><b>Commit Message:</b> Testing</Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
*/
