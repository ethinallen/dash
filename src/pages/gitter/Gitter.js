import React, { useState, useRef } from 'react';
import Typing from 'react-typing-animation';
import { Search as SearchIcon } from "@material-ui/icons";
import { Grid } from 'semantic-ui-react';
import Geets from './Geets';
import Particles from "react-tsparticles";

import './Gitter.css'

function Gitter() {

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
      <div id="gitter-body">

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

        <div id="grid-container">
          <div id="column-container">
            <Grid centered={true} columns={1}>
              <Geets geets={geets} />
            </Grid>
          </div>
        </div>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 75,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

      </div>
    );
}

export default Gitter;
