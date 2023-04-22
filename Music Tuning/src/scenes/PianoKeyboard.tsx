import { Layout, Line, Node, Rect} from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import { waitFor, waitUntil } from '@motion-canvas/core/lib/flow';
import { fadeTransition } from '@motion-canvas/core/lib/transitions';
import { createRef, range } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {

view.fill('#242424'); // set the background of this scene

const blackFill = '#000';
const blackStroke = '#fff';
const whiteFill = '#fff'
const whiteOutline='#000'
const lineWidth = 1.3;
const roundness = 25;

const C =
    <Line
        stroke={whiteOutline}
        fill={whiteFill}
        padding={20}
        closed
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [0,0],
            [0,600],
            [120,600],
            [120,300],
            [80,300],
            [80,0],
        ]}        
    />
;
const D = 
    <Line
        stroke={whiteOutline}
        fill={whiteFill}
        padding={20}
        closed
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [40,0],
            [40,300],
            [0,300],
            [0,600],
            [120,600],
            [120,300],
            [80,300],
            [80,0],  
        ]}
    />
;
const E =
    <Line
        stroke={whiteOutline}
        fill={whiteFill}
        padding={20}
        closed
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [40,0],
            [40,300],
            [0,300],
            [0,600],
            [120,600],
            [120,0],
        ]}        
    />
;
const F =
    <Line
        stroke={whiteOutline}
        fill={whiteFill}
        padding={20}
        closed
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [0,0],
            [0,600],
            [120,600],
            [120,300],
            [80,300],
            [80,0],
        ]}        
    />
;
const G = 
    <Line
        stroke={whiteOutline}
        fill={whiteFill}
        padding={20}
        closed
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [40,0],
            [40,300],
            [0,300],
            [0,600],
            [120,600],
            [120,300],
            [80,300],
            [80,0],  
        ]}
    />
;
const A = 
    <Line
        stroke={whiteOutline}
        fill={whiteFill}
        padding={20}
        closed
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [40,0],
            [40,300],
            [0,300],
            [0,600],
            [120,600],
            [120,300],
            [80,300],
            [80,0],  
        ]}
    />
;
const B =
    <Line
        stroke={whiteOutline}
        fill={whiteFill}
        padding={20}
        closed
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [40,0],
            [40,300],
            [0,300],
            [0,600],
            [120,600],
            [120,0],
        ]}        
    />
;

const Cs = 
    <Line
        stroke={blackStroke}
        fill={blackFill}
        closed
        offset={[1,0]}
        padding={20}
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [0,0],
            [0,300],
            [70,300],
            [70,0],
        ]}
    />
;
const Db = 
    <Line
        closed
        points={[
            [0,0],
            [0,300],
            [40,300],
            [40,0],
        ]}
    />
;
const Ds = 
    <Line
        stroke={blackStroke}
        fill={blackFill}
        closed
        offset={[1,0]}
        padding={20}
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [0,0],
            [0,300],
            [70,300],
            [70,0],
        ]}
    />
;
const EbF =
    <Line
        closed
        points={[
            [0,0],
            [0,300],
            [170,300],
            [170,0],
        ]}
    />
;
const Fs = 
    <Line
        stroke={blackStroke}
        fill={blackFill}
        closed
        offset={[1,0]}
        padding={20}
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [0,0],
            [0,300],
            [70,300],
            [70,0],
        ]}
    />
;
const Gb = 
    <Line
        closed
        points={[
            [0,0],
            [0,300],
            [40,300],
            [40,0],
        ]}
    />
;
const Gs = 
    <Line
        stroke={blackStroke}
        fill={blackFill}
        closed
        offset={[1,0]}
        padding={20}
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [0,0],
            [0,300],
            [70,300],
            [70,0],
        ]}
    />
;
const Ab = 
    <Line
        closed
        points={[
            [0,0],
            [0,300],
            [40,300],
            [40,0],
        ]}
    />
;
const As = 
    <Line
        stroke={blackStroke}
        fill={blackFill}
        closed
        offset={[1,0]}
        padding={20}
        lineWidth={lineWidth}
        radius={roundness}
        points={[
            [0,0],
            [0,300],
            [70,300],
            [70,0],
        ]}
    />
;

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
yield* fadeTransition(1);
yield* waitFor(2);

yield* F.opacity(.5,.5);
yield* F.opacity(1,.5);

yield* waitFor(3);

});