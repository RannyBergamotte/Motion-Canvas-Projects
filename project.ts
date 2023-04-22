import { makeProject } from "@motion-canvas/core";

import scene0 from "./scenes/scene0?scene";
import scene1 from "./scenes/scene1?scene";
import example from "./scenes/example?scene";
import TextParralax from "./scenes/TextParralax?scene";
import PianoKeyboard from "./scenes/PianoKeyboard?scene";
import Graph from "./scenes/Graph?scene";
import Scale from "./scenes/Scale?scene";
import audio from "./scenes/assets/VO.mp3";

export default makeProject({
  scenes: [scene0, scene1, TextParralax, Scale, Graph, example, PianoKeyboard],
  audio: audio,
});
