import { Circle, Img, Layout, Rect, Txt } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import { all, waitFor, waitUntil } from '@motion-canvas/core/lib/flow';
import './global.css';
import { blur } from '@motion-canvas/2d/lib/partials';
import { createRef, makeRef, range, useLogger, useRandom } from '@motion-canvas/core/lib/utils';
import { defaultStyle, signal } from '@motion-canvas/2d/lib/decorators';
import { DEFAULT, createSignal } from '@motion-canvas/core/lib/signals';
import { Random } from '@motion-canvas/core/lib/scenes';
import { Logger } from '@motion-canvas/core';
import { easeInOutCubic, easeInOutQuint, easeInQuad, easeOutCirc, easeOutCubic, easeOutExpo, easeOutQuad, linear, map, tween } from '@motion-canvas/core/lib/tweening';
import { slideTransition, zoomInTransition } from '@motion-canvas/core/lib/transitions';
import { BBox, Direction } from '@motion-canvas/core/lib/types';
import { CodeBlock, edit, insert, lines, remove,} from '@motion-canvas/2d/lib/components/CodeBlock';

export default makeScene2D(function* (view) {

view.fill('#242424'); // set the background of this scene

//--------

const Intro = createRef<CodeBlock>();

yield view.add(
// note that the ` bracket is followed by a new line
//What makes 'Music' sound good?
  <CodeBlock
  opacity={1}
  ref={Intro}
    code={`
    What
    `}
  />,
);
yield * Intro().edit(.5)`What${insert(' makes')}`;
yield * Intro().edit(.5)`What makes${insert(' music ')}`; 
yield * Intro().edit(.5)`What makes music${insert(' sound ')}`;
yield * Intro().edit(.5)`What makes music sound${insert(' good ')}`;
yield * Intro().edit(.5)`What makes music sound good${insert(' ? ')}`;
yield * Intro().selection(DEFAULT,.5);

//--------

const random = useRandom();

const words = ["composition", "rhythm", "harmonies", "dynamics", "expression", "tuning"];
const zDepthView = createSignal(10) ;
const posX = createSignal(0) ;
const posY = createSignal(0) ;

const zDepth = random.floatArray(words.length,.5,2) ;
const posRandomX = random.floatArray(words.length,-2000,2000) ;
const posRandomY = random.floatArray(words.length,-1000,1000) ;
const parText: Txt[] = [];


view.add (
<Layout

  spawner={() =>
    words.flatMap((word,i) => (
      <Layout
        scale={2*((.5*zDepth[i])/(2*zDepthView()))}
      >
      <Txt
        position={[posRandomX[i]*zDepth[i]-posX(),posRandomY[i]*zDepth[i]-posY()]}
        strokeFirst
        fill={'#ffffff'}
        fontSize={500}
        stroke={'#242424'}
        ref={makeRef(parText, i)}
        lineWidth={0}
        filters={[blur(15 *Math.abs( zDepth[i]- zDepthView() ) )]}
      >
        {word}
      </Txt>
      </Layout>
      ))
  }
/>
);


//----------

//yield * zoomInTransition(bbox,1)


for (let i = 0; i < words.length; i++) {
  yield * all(
    Intro().opacity(0,1),
    zDepthView(zDepth[i],1.5),
    posX(posRandomX[i]*zDepth[i],1.5),
    posY(posRandomY[i]*zDepth[i],1.5)
  );
};

//at this point zoom into on to the i and make it into a hold with rabbit popout or something


yield* waitUntil('end')
yield * posY(-3000,1)


});