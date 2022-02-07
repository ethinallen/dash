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

import { useTheme } from "@material-ui/styles";



function Geets({ geets }) {
  return (
    <div>
     {geets.map((geet) => (
       <Grid container spacing={4}>
       <Grid item lg={3} md={4} sm={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="100%"
              image={geet.avatarurl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {geet.username}
              </Typography>
              <Typography variant="body4" color="text.secondary"><b>Repo:</b> <a href={geet.repo_url} >{geet.repo_name}</a></Typography>
              <div>  </div>
              <Typography variant="body2" color="text.secondary"><b>Commit Message:</b> {geet.message}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
     ))}
   </div>
  )
};

export default Geets;


/*
<Card centered fluid>
  <Card.Content>
    <Image
      floated='right'
      size='small'
      src={geet.avatarurl}
    />
    <Card.Header>{geet.username}</Card.Header>
    <Card.Meta>Latest Geet: {geet.date}</Card.Meta>
    <Card.Meta>Pushed to <a href={geet.repo_url} >{geet.repo_name}</a></Card.Meta>
    <Card.Description>
      {geet.message}
    </Card.Description>
  </Card.Content>
</Card>



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

*/
