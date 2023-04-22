import { CubicBezier, Layout, Line, QuadBezier, Rect, Spline, Txt, Img, Video} from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, any, delay, loop, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { createRef, makeRef, range, useDuration } from '@motion-canvas/core/lib/utils';
import {CodeBlock} from '@motion-canvas/2d/lib/components/CodeBlock';
import { Direction, Vector2 } from '@motion-canvas/core/lib/types';
import { fadeTransition, slideTransition } from "@motion-canvas/core/lib/transitions";
import './global.css';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { easeInOutQuint, easeInQuad, easeOutCirc, easeOutCubic, easeOutExpo, easeOutQuad, linear, map, tween } from '@motion-canvas/core/lib/tweening';
import Bruckner4 from './assets/Bruckner4.mp4';
import SwanLake from './assets/SwanLakeCut.mp4';
import AnthemCymbal from './assets/AnthemCut.mp4';
import { Player } from '@motion-canvas/core';
import { Random } from '@motion-canvas/core/lib/scenes';

export default makeScene2D(function* (view) {
  // Create your animations here
  view.fill('#242424'); // set the background of this scene
const random = Random



const barLine = createRef<Line>();
const staffLine: Line[] = [];
const staffLineOpacity = createSignal(0)

view.add ( 
<>

<Rect width={1200}
    height={300} layout alignItems={'center'}>,
<Line
      points={[
        [-600,140],
        [-600,-140]
      ]}  
      end={0}
      ref={barLine}
      lineWidth={20}
      stroke={'#ffffff'}
      radius={200}
      lineCap={'round'} 
    />

<Layout direction={'column'} layout gap={70}>
  {range(5).map(index =>

    <Line
      points={[
        [-600,0],
        [600,0]
      ]}  
      opacity={staffLineOpacity}
      ref={makeRef(staffLine,index)}
      end={0}
      lineWidth={20}
      stroke={'#ffffff'}
      radius={200}
      lineCap={'round'} 
    />
  )}
</Layout>

</Rect>
</>
)

const count = createSignal(0)
const randomX = [-400,-200,0,200,400]
const randomY = [0,40,70,-40,0]
const randomX2 = [-300,-200,-300,250,250]
const randomY2 = [75,-25,-70,0,100]

// Create a layout ref for later
const layout = createRef<Layout>();
// Pre generate notes.
const notesPool = range(5).map(i => (
  <Txt
    strokeFirst
    position={[randomX[i],randomY[i]]}
    fill={'#ffffff'}
    opacity={0}
    fontSize={300}
    stroke={'#242424'}
    lineWidth={30}
    fontFamily={'LeLand'}
  >
    
  </Txt>
));

// This spawner function changes how many of those generated notes it's grabbing, as specific objects, rather than making new ones when count() changes.
view.add(
  <Layout
    ref={layout}
    spawner={() => notesPool.slice(0,count())}
  />,
);



/*
const BrucknerVid = createRef<Video>();
view.add(<Video ref={BrucknerVid} src={Bruckner4} scale={0} />);

const SwanLakeVid = createRef<Video>();
view.add(<Video ref={SwanLakeVid} src={SwanLake} scale={2} opacity={0} />);

const Anthem = createRef<Video>();
view.add(<Video ref={Anthem} src={AnthemCymbal} scale={2} opacity={0} />);
*/

yield * fadeTransition(.25);
yield * barLine().start(0, 0).to(1, 1);
yield * staffLineOpacity(1,0)
yield* all(
  ...staffLine.map((line, index) => delay(0.3*index, line.end(1,1)))
);

yield* count(5,0);
let NoteHead1 = layout().children() as Txt[];
yield* all(
  ...NoteHead1.map((Txt, index) => delay(0.1*index, Txt.opacity(1,0.5)))
);
yield* waitFor(.5)
// Get what is in layout as Txt elements. This must be done after count() has added them, or you'll get an empty list.
yield* all(
// The asterisk in function* is specifying that this is a thread genearator, which is what is used for animations. All the functions like `fill()` are thread generators.
  ...NoteHead1.map(function* (note, i) {yield* note.position.x(randomX2[i], 3)}),
  ...NoteHead1.map(function* (note, i) {yield* note.position.y(randomY2[i], 3)}),
);


yield * waitUntil('end')
/*
BrucknerVid().play();
yield * waitFor (3);
yield * BrucknerVid().scale(2, 1.5);
yield * waitFor (13);
BrucknerVid().pause();
SwanLakeVid().play();
yield * SwanLakeVid().opacity(2, 1.5);
yield * waitFor (6.6);
SwanLakeVid().pause();
Anthem().play();
yield * Anthem().opacity(2, 1.5);
yield * waitFor (3);
Anthem().pause();
*/

});