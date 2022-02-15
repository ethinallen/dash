import React from 'react'
import {
  Card,
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
        <Card>
           <CardMedia
             component="img"
             image={geet.avatarurl}
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {geet.username}
             </Typography>
             <Typography variant="body4" color="text.secondary" component="div"><b>Repo:</b> <a href={geet.repo_url} >{geet.repo_name}</a></Typography>
             <Typography variant="body3" color="text.secondary" component="div"><b>Date:</b>{geet.date}</Typography>
             <Typography variant="body2" color="text.secondary" component="div"><b>Commit Message:</b> {geet.message}</Typography>
           </CardContent>
         </Card>
       </div>
    ))}

     </Grid>
  )
};

export default Geets;
