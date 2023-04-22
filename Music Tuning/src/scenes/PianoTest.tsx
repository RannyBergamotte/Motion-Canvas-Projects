import { Layout, Line, Node, Rect} from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import { waitFor, waitUntil } from '@motion-canvas/core/lib/flow';
import { createRef, range } from '@motion-canvas/core/lib/utils';
import { C,D,E,F,G,A,B,Cs,Db,Ds,EbF,Fs,Gb,Gs,Ab,As} from './pianoRAW'

export default makeScene2D(function* (view) {

view.fill('#242424'); // set the background of this scene

const blackFill = '#000';
const blackStroke = '#fff';
const whiteFill = '#fff'
const whiteOutline='#000'
const lineWidth = 1.3;
const roundness = 25;


view.add(
    <Layout position={[0,0]} scale={1}>
        <Rect layout direction={'row'} gap={10}>
            {C}, {D}, {E}, {F}, {G}, {A}, {B}


        </Rect>
        <Rect layout direction={'row'} position={[0,-158]}  gap={10}>
            {Cs}, {Db},{Ds},{EbF},{Fs},{Gb},{Gs},{Ab},{As}
        </Rect>
    </Layout>
)

yield* waitFor(2);

yield* F.opacity(.5,.5);
yield* F.opacity(1,.5);

yield* waitFor(3);

});