// Source: https://www.digitalocean.com/community/tutorials/js-background-effects-particlesjs

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 63,
        "density": {
          "enable": true,
          "value_area": 700 // Denser the smaller the number.
        }
      },
      "color": { // The color for every node, not the connecting lines.
        "value": "#0000ff" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
      },
      "shape": {
          "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
          "stroke": { // The border
            "width": 0,
            "color": "#0000ff"
          },
          "polygon": { // if the shape is a polygon
            "nb_sides": 6
          },
          "image": { // If the shape is an image
            "src": "",
            "width": 100,
            "height": 100
          }
      },
      "opacity": {
        "value": 0.7,
        "random": true
      },
      "size": {
        "value": 45 ,
        "random": true
      },
      "line_linked": {
        "enable":false,
        "distance": 200, // The radius before a line is added, the lower the number the more lines.
        "color": "#0000ff",
        "opacity": 0.5,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
        "random": true,
        "straight": false, // Whether they'll shift left and right while moving.
        "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
        "bounce": false,
        "attract": { // Make them start to clump together while moving.
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    }
  })