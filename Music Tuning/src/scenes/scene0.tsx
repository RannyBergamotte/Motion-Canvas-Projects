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

yield * waitFor (.1)
});