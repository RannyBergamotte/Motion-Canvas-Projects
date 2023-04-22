import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Text, Image, Rect, Line} from '@motion-canvas/2d/lib/components';
import {createRef, range} from '@motion-canvas/core/lib/utils';
import {all, any, loop, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { cancel } from '@motion-canvas/core/lib/threading';
import {CodeBlock} from '@motion-canvas/2d/lib/components/CodeBlock';
import { Direction, Vector2 } from '@motion-canvas/core/lib/types';
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import iconImg from "../../media/images/SquigglesIcon Transparent.png"
import iconGlow from "../../media/images/SquigglesIcon Transparent Glow.png"
import textGlow from "../../media/images/SquigglesTextTransparentGlow.png"
import finalImg from "../../media/images/Desktop.png"
import { createSignal } from '@motion-canvas/core/lib/signals';
import { easeInOutQuint, easeInQuad, easeOutCirc, easeOutCubic, easeOutExpo, easeOutQuad, linear, map, tween } from '@motion-canvas/core/lib/tweening';


export default makeScene2D(function* (view) {
    const icon = createRef<Image>();
    const glow = createRef<Image>();
    const text = createRef<Image>();
    const final = createRef<Image>();
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
            lineWidth={380}
            stroke={'#fff'}
            points={range(samples).map(i => () => [
                ((i - samples / 2) * width) / samples,
                (Math.sin(time() + (Math.PI * i) / 50) * height()) / 2,
            ])}
        />,
        <Rect
            ref={bg}
            width={1920}
            height={1080}
            fill={'white'}
            opacity={0}
        />,
        <Image
            ref={icon}
            src={iconImg}
            opacity={0}
        />,
        <Image
            ref={glow}
            src={iconGlow}
            opacity={0}
        />,
        <Image
            ref={text}
            src={textGlow}
            opacity={0}
        />,
        <Image
            ref={final}
            src={finalImg}
            opacity={0}
        />
        </>
    );
    yield* slideTransition(Direction.Right);
    yield height(500, 2)
    yield* line().lineWidth(150, 1)
    
    yield* time(65,5)
    yield* waitUntil("Transition")
    yield line().lineWidth(250, 1)
    yield* waitFor(0.75)
    yield* bg().opacity(1,0.1)
    yield line().opacity(0,0)
    yield icon().opacity(1, 0)
    yield* tween (1.25, value => {
        bg().opacity(easeOutCubic(value, 1, 0));
      });
        
    yield* all( 
        icon().scale(0.1146194226, 2),
        icon().position.x(-133,1),
        icon().position.y(-91,1),
    )
    yield* final().opacity(100, 2)
});