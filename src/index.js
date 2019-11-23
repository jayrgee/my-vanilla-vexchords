//import "./styles.css";
import * as vexchords from "vexchords";

const sel = "#app";

// Draw an open D7
vexchords.draw(sel, {
  chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, "x"], [6, "x"]]
});

// Customize size and default color
vexchords.draw(
  sel,
  {
    chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, "x"], [6, "x"]]
  },
  { width: 200, height: 240, defaultColor: "#745" }
);

// Set color of circles and bars only
vexchords.draw(
  sel,
  {
    chord: [[2, 3], [3, 3], [4, 3], [6, "x"]],
    position: 5,
    barres: [{ fromString: 5, toString: 1, fret: 1 }]
  },
  { strokeColor: "#8a8" }
);

// Set colors of bridge and text only
vexchords.draw(
  sel,
  {
    chord: [[1, 0], [2, 0], [6, 0]],
    position: 0,
    barres: [{ fromString: 5, toString: 3, fret: 2 }]
  },
  { bridgeColor: "#8a8", textColor: "#8a8" }
);

// Tiny chords, don't show tuning keys
vexchords.draw(
  sel,
  {
    chord: [],
    position: 1,
    barres: [
      { fromString: 6, toString: 1, fret: 1 },
      { fromString: 5, toString: 3, fret: 3 }
    ]
  },
  {
    width: 30,
    height: 40,
    strokeColor: "#745",
    showTuning: false
  }
);
