import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Line, Txt} from '@motion-canvas/2d/lib/components';
import {createRef, makeRef, range, useRandom} from '@motion-canvas/core/lib/utils';
import {all, delay, waitFor} from '@motion-canvas/core/lib/flow';
import './global.css';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { tween } from '@motion-canvas/core/lib/tweening';

export default makeScene2D(function* (view) {
    view.fill('#242424'); // set the background of this scene
    const random = useRandom();

view.add (
    <Txt
  fill={'#ffffff'}
  fontSize={200}
  stroke={'#242424'}
  lineWidth={0}
  fontFamily={'LeLand'}
  position = {[0,-200]}
  >
    3:2
  </Txt>
)


const scaleWidth = 500
const xOffset = scaleWidth-25
const start = 1;
const end = 2*xOffset;
const count = 20;

const logArray2 = Array.from({ length: count }, (_, i) => Math.round(Math.exp(Math.log(end / start) * (i / (count - 1))) * start))
const linearArray = Array.from({ length: count }, (_, i) => xOffset-(start + ((end - start) / (count - 1)) * i));
const Tick: Line[] = [];

const axisArrow = createRef<Line>()

view.add (
  <>
    <Line
      stroke={'#fff'}
      lineWidth={12}
      radius={25}
      lineCap={'round'}
      ref={axisArrow}
      end={0}
      opacity={0}
      points={[
          [-scaleWidth,200],
          [scaleWidth,200],
      ]}
      endArrow
    />
    {range(count).map((i) => (
    <Line
      position={[xOffset-logArray2[i],0]}
      stroke={'#fff'}
      lineWidth={6}
      radius={25}
      end={0}
      opacity={0}
      lineCap={'round'}
      ref={makeRef(Tick,i)}
      points={[
          [0,180],
          [0,220],
      ]}
    />
))};

  </>
)



yield * waitFor(1);

yield * all(
  axisArrow().end(1,1),
  axisArrow().opacity(1,.3)
);
yield * all(
  ...Tick.map((line, index) => delay(0.1*index, line.end(1,1))),
  ...Tick.map((line, index) => delay(0.1*index, line.opacity(1,.1)))
);

yield * all(
  ...Tick.map((TickRef, i) => TickRef.position.x(linearArray[i], 5))
)
yield * all(
  ...Tick.map((TickRef, i) => TickRef.position.x(xOffset-logArray2[i], 5))
)

// Absolutely massive thanks to Jacobo for helping me
});

