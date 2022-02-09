import React, { useState, useRef } from 'react';
import { Search as SearchIcon } from "@material-ui/icons";
import { Grid } from 'semantic-ui-react';
import Geets from './Geets';

import Tickles from "./Tickles";
import Particles from "react-tsparticles";

// import styles
import useStyles from "./styles";


function Gitter() {


  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  var classes = useStyles();

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

        <div className={classes.gridContainer}>

        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="field">
            <input ref={authorRef} type="text" placeholder="enter Github username (like ethinallen)" />
          </div>
        </form>
        <Geets geets={geets} />

        </div>
      </div>
    );
}

export default Gitter;
