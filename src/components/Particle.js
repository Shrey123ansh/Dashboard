import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Particle = () => {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };

  return (
    <div>

      <Particles 
      id="tsparticles"
      init={particlesInit}
          params={{
            // "fullScreen": { enable: false },
      "particles": {
        "number": {
          "value": 150,
          "density": {
            "enable": true,
            "value_area": 2000
          }
        },
        "color": {
          "value": "#eb4646"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "http://image.ibb.co/g9eFcF/logo_transparent.png",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.2,
            "sync": true
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed":3,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 120,
          "color": "#fce1e1",
          "opacity": 0.8,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 5,
          "direction": "random",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": true,
          "attract": {
            "enable": true,
            "rotateX": 3600,
            "rotateY": 3600
          }
        }
      },
    
    
    
      "interactivity": {
        "detect_on": "canvas",
    
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
    
          "onclick": {
            "enable": false,
            "mode": "remove"
          },
          "resize": true
        },
    
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 100,
            "size": 2,
            "duration": 2,
            "opacity": 0.5,
            "speed": 3
          },
    
          "repulse": {
            "distance": 200,
            "duration": 0.5
          },
    
          "push": {
            "particles_nb": 5
          },
    
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }}
      />

{/* <Particles
id="tsparticles"
init={particlesInit}
    params={{
      "fullScreen": { enable: false },
	    "particles": {
            "number": {
              value: 150,
              "density": {
                enable: true,
                value_area: 786
              }
            },
            "color": {
              value: ["#ffffff", "#FF6F91", "#F9F871", "#D65DB1"]
            },
            "shape": {
              type: "circle",
              "stroke": {
                width: 0,
                color: "#000000"
              },
              "polygon": {
                nb_sides: 12
              },
              "image": {
                src: "",
                width: 100,
                height: 100
              }
            },
            "opacity": {
              value: 1,
              random: true,
              "anim": {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
              }
            },
            "size": {
              value: 2.5,
              random: true,
              "anim": {
                enable: true,
                speed: 3,
                size_min: 0.3,
                sync: false
              }
            },
            "line_linked": {
              enable: false,
              distance: 100,
              color: "#fff",
              opacity: 0.023674428,
              width: 1
            },
            "move": {
              enable: true,
              speed: 1.3,
              direction: "top",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: false,
              "attract": {
                enable: true,
                rotateX: 2082.2488,
                rotateY: 3363.6328
              }
            }
          },
          "interactivity": {
            detect_on: "canvas",
            "events": {
              "onhover": {
                enable: true,
                mode: "grab"
              },
              "onclick": {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            "modes": {
              "grab": {
                distance: 70,
                "line_linked": {
                  opacity: 0.25
                }
              },
              "bubble": {
                distance: 100,
                size: 5,
                duration: 8.598243,
                opacity: 0,
                speed: 3
              },
              "repulse": {
                distance: 150,
                duration: 0.8
              },
              "push": {
                particles_nb: 4
              },
              "remove": {
                particles_nb: 2
              }
            }
          },
          "retina_detect": true
	}} /> */}

    </div>
  )
}

export default Particle