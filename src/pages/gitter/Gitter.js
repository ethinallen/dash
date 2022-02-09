import React, { useState, useRef } from 'react';
import Typing from 'react-typing-animation';
import { Search as SearchIcon } from "@material-ui/icons";
import { Grid } from 'semantic-ui-react';
import Geets from './Geets';
import Particles from "react-tsparticles";

// import styles
import useStyles from "./styles";


function Gitter() {

  var classes = useStyles();


  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const [geets, updateGeets] = useState([]);
  const authorRef = useRef();
  const baseURL = 'https://7vcvnq8z2g.execute-api.us-east-2.amazonaws.com/staging/fetch/'

  function handleSubmit(event) {
    event.preventDefault()
    const author = authorRef.current.value
    fetch(baseURL + author)
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      updateGeets(myJson['response']);
    })
    authorRef.current.value = null;
  }

    return (
      <div className={classes.particlesContainer}>

        <div id='title-container'>
          <u>gitter.</u>

          <div className="description">
            <Typing speed={10}>
              <span>Twitter...<Typing.Delay ms={1000} /> but for Github commit messages</span>
            </Typing>
          </div>

        </div>


        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="field">
            <input ref={authorRef} type="text" placeholder="enter Github username (like ethinallen)" />
          </div>
        </form>

        <div id="grid-container" className={classes.gridContainer}>
          <div id="column-container">
            <Grid centered={true} columns={1}>
              <Geets geets={geets} />
            </Grid>
          </div>
        </div>
    </div>
    );
}

export default Gitter;
