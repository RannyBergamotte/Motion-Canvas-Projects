import { makeScene2D } from '@motion-canvas/2d';
import './global.css';
import { Layout, Line, Rect, Txt } from '@motion-canvas/2d/lib/components';
import { all, delay, loop, waitFor } from '@motion-canvas/core/lib/flow';
import { createRef, makeRef, makeRefs, useRandom } from '@motion-canvas/core/lib/utils';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { signal } from '@motion-canvas/2d/lib/decorators';

export default makeScene2D(function* (view) {
    view.fill('#242424'); // set the background of this scene
    const random = useRandom();

const ScaleText = createRef<Txt>();

const frequency = createSignal(244)
const FreqText = createRef<Txt>();
const arrow = createRef<Line>();
const Freq = createRef<Layout>();
const Scale = createRef<Layout>();
const TopName = createRef<Txt>();

view.add(
<Layout ref={Scale}>
    <Txt
        fill={'#ffffff'}
        fontSize={200}
        stroke={'#242424'}
        lineWidth={0}
        ref={ScaleText}
        opacity={0}
        fontFamily={'LeLand'}
        position = {[0,0]}
        >
            C
            D
            E
            F
            G
            A
            B
            C
    </Txt>
    <Layout ref={Freq} position={[-640,0]}>
        <Txt
            fill={'#ffffff'}
            position={[0,300]}
            fontSize={100}
            ref={FreqText}
            opacity={0}
            stroke={'#242424'}
            lineWidth={0}
            fontFamily={'LeLand'}
            text={() => `${frequency().toFixed(0)} Hz`}
        />
        <Line
            position={[0,0]}
            stroke={'#fff'}
            lineWidth={6}
            radius={25}
            end={0}
            opacity={0}
            ref={arrow}
            lineCap={'round'}
            endArrow
            points={[
                [0,60],
                [0,200],
            ]}
        />
    </Layout>
</Layout>
)

const FreqText2 = createRef<Txt>();
const arrow2 = createRef<Line>();
const Freq2 = createRef<Layout>();
view.add(
    <Layout ref={Freq2} position={[-640,200]}>
    <Txt
        fill={'#ffffff'}
        position={[0,300]}
        fontSize={100}
        ref={FreqText2}
        opacity={0}
        stroke={'#242424'}
        lineWidth={0}
        fontFamily={'LeLand'}
        text={() => `244 Hz`}
    />
    <Line
        position={[0,0]}
        stroke={'#fff'}
        lineWidth={6}
        radius={25}
        opacity={0}
        ref={arrow2}
        lineCap={'round'}
        endArrow
        points={[
            [0,60],
            [0,200],
        ]}
    />
    </Layout>
)

const Ratio1 = createSignal(3)
const Ratio2 = createSignal(2)
const JustIntonation = createRef<Txt>();
const Ratio = createRef<Txt>();
view.add(
<Layout>
    <Txt
        fill={'#ffffff'}
        fontSize={200}
        stroke={'#242424'}
        lineWidth={0}
        ref={Ratio}
        opacity={0}
        fontFamily={'LeLand'}
        position = {[0,-200]}
        text={() => `${Ratio1().toFixed(0)}:${Ratio2().toFixed(0)}`}
    />
    <Txt
        fill={'#ffffff'}
        fontSize={200}
        stroke={'#242424'}
        lineWidth={0}
        ref={JustIntonation}
        opacity={0}
        fontFamily={'LeLand'}
        position = {[0,-200]}
        text={() => `Just Intonation`}
    />
</Layout>
)

const multiplication = createRef<Txt>();
view.add(
<Txt
    fill={'#ffffff'}
    position={[-280,500]}
    fontSize={100}
    ref={multiplication}
    opacity={0}
    stroke={'#242424'}
    lineWidth={0}
    fontFamily={'LeLand'}
    text={() => `× 1.5 =`}
/>
)

const BoxLeft = createRef<Rect>();
const BoxRight = createRef<Rect>();

view.add(
<>
    <Rect
    fill={'#ffffff'}
    position = {[-100,-190]}
    opacity={0}
    ref={BoxLeft}
    offset={[0,1]}
    width={140}
    height={160}
    />
    <Rect
    fill={'#ffffff'}
    position = {[100,-190]}
    opacity={0}
    ref={BoxRight}
    offset={[0,1]}
    width={140}
    height={160}
    />
</>
)

yield * ScaleText().opacity(1,1);
yield * waitFor(2)
yield * all(arrow().end(1,.5), arrow().opacity(1,.2));
yield * FreqText().opacity(1,1);
yield * waitFor(2)
yield * all(Freq().position.x(640,2), frequency(488,2));
yield * waitFor(2);
yield * all(Scale().position.y(200,1))
yield * JustIntonation().opacity(1,.5)
yield * waitFor(3)
yield * JustIntonation().opacity(0,.25)
yield * Ratio().opacity(1,.25)
yield * waitFor(1)
yield * all(Freq().position.x(-640,2), frequency(244,2));
yield * waitFor(1)
yield * all(arrow2().opacity(1,0),FreqText2().opacity(1,0));
yield * all(Freq().position.x(80,2), frequency(366,2),
        delay(.5, multiplication().opacity(1,1))  );
yield * waitFor(1)
yield * all(BoxLeft().opacity(1,1),BoxRight().opacity(1,1))
yield * Ratio().text(':',0)
yield * all(
        loop( 15, () => BoxRight().opacity(.7, .2).to(.2,.2), ),
        loop( 10, () => BoxLeft().opacity(.7, .3).to(.2,.3), )  );
yield * all(BoxLeft().opacity(1,1),BoxRight().opacity(1,1))
yield * Ratio().text('3:2',0)
yield * all(BoxLeft().opacity(0,1),BoxRight().opacity(0,1))
yield * all(Freq().position.y(1000,1),Freq2().position.y(1000,1),Scale().position.y(1000,1),multiplication().position.y(1000,1))



});