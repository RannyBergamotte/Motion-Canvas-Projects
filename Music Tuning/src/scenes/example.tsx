import { CubicBezier, Layout, Line, QuadBezier, Rect, Spline, Txt, Img} from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, any, loop, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { createRef, range } from '@motion-canvas/core/lib/utils';
import {CodeBlock} from '@motion-canvas/2d/lib/components/CodeBlock';
import { Direction, Vector2 } from '@motion-canvas/core/lib/types';
import { fadeTransition, slideTransition } from "@motion-canvas/core/lib/transitions";
import './global.css';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { easeInOutQuint, easeInQuad, easeOutCirc, easeOutCubic, easeOutExpo, easeOutQuad, linear, map, tween } from '@motion-canvas/core/lib/tweening';


export default makeScene2D(function* (view) {
  // Create your animations here
  view.fill('#242424'); // set the background of this scene



const icon = createRef<Img>();
const glow = createRef<Img>();
const text = createRef<Img>();
const final = createRef<Img>();
const samples = 150;
const width = 1524;
const height = createSignal(0);
const time = createSignal(0);
const line = createRef<Line>();
const bg = createRef<Rect>();

view.add(
    
    <>
    <Line
        ref={line}
        position={[0,200]}
        lineWidth={12}
        stroke={'#fff'}
        points={range(samples).map(i => () => [
            ((i - samples / 2) * width) / samples,
            (Math.sin(time() + (Math.PI * i) / 50) * height()) / 2,
        ])}
    />,
    <Rect
        ref={bg}
        width={1920}
        height={12}
        fill={'white'}
        opacity={0}
    />,
    </>
);

yield* fadeTransition(1);
yield * all(line().position.y(0,1))
yield height(250, 2)
yield* line().lineWidth(20, 1)

yield* time(25,10)
//yield* waitUntil("Transition")
yield line().lineWidth(250, 1)
yield line().opacity(0,0)

yield* waitFor(0.75)

//I stole this sine wave code from Squiggles#1476, thanks Squiggles!

//yield* bg().opacity(1,0.1)
//yield icon().opacity(1, 0)
//yield* tween (1.25, value => {    bg().opacity(easeOutCubic(value, 1, 0));

    
/*yield* all( 
    icon().scale(0.1146194226, 2),
    icon().position.x(-133,1),
    icon().position.y(-91,1),
)*/
//yield* final().opacity(100, 2)

/*
// const SineWave = createRef<CubicBezier>();
//const SineWavePos = createRef<Node>();
view.add (
  //<Node position={[0,0]}>
    <CubicBezier
    //ref={SineWavePos}
    lineWidth={10}
    stroke={'white'}
    p0={[0, 0]}
    p3={[1000, 0]}
    p1={[477, 550]}
    p2={[523, -550]}
    />
  //</Node>
  )
//SineWavePos().absolutePosition([-100,100]);
*/


/*

view.add (
  <Txt
  ref={NoteHead2}
  >
    
  </Txt>
)


view.add(
<CodeBlock
  fill={'#C50ED2'}
  fontSize={300}
  stroke={'#C50ED2'}
  lineWidth={8}
  fontFamily={'LeLand'}
code={'haha\uE0A4\uE0A4 '
}
/>
)
*/

/*
view.add (
  <Spline lineWidth={4} fill={'#e13238'} closed>
    
  </Spline>
)
*/

//  yield* waitFor(5);
});