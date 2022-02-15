import React, { useState, useRef } from 'react';
// import { Search as SearchIcon } from "@material-ui/icons";
// import { styled, alpha } from '@material-ui/styles';
import Geets from './Geets';

import Tickles from "./Tickles";

// import styles
import useStyles from "./styles";

function Gitter() {

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
      <>
        <Tickles />

        <div className={classes.gridContainer}>

          <form className={classes.fieldContainer} onSubmit={handleSubmit}>
            <input ref={authorRef} type="text" placeholder="enter a Github username" />
          </form>

          <Geets geets={geets} />

        </div>
      </>
    );
}

export default Gitter;
