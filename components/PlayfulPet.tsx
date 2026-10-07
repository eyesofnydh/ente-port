// PlayfulPet — a pixel-art pet that follows, flees from, or naps beside the cursor.
// Framer code component: create a new code component in Framer and replace its
// contents with this whole file.
//
// Movement logic and the cat sprite sheet are adapted from oneko.js
//   Copyright © 2022 adryd — MIT License — https://github.com/adryd325/oneko.js
// Dog sprite sheet from spicetify-oneko
//   Copyright © 2022 adryd, © 2026 kyrie25 — MIT License — https://github.com/kyrie25/spicetify-oneko
// The MIT License requires this notice to stay with the code.

import * as React from "react"
import { addPropertyControls, ControlType, RenderTarget } from "framer"

/* -------------------------------------------------------------------------- */
/*  Sprites: 256×128 sheets, 8 columns × 4 rows of 32×32 frames                */
/* -------------------------------------------------------------------------- */

const CAT_SPRITE = "data:image/gif;base64,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"
const DOG_SPRITE = "data:image/gif;base64,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"

type Frame = [col: number, row: number]

const SPRITES: Record<string, Frame[]> = {
    idle: [[3, 3]],
    alert: [[7, 3]],
    tired: [[3, 2]],
    sleeping: [[2, 0], [2, 1]],
    scratchSelf: [[5, 0], [6, 0], [7, 0]],
    scratchWallN: [[0, 0], [0, 1]],
    scratchWallS: [[7, 1], [6, 2]],
    scratchWallE: [[2, 2], [2, 3]],
    scratchWallW: [[4, 0], [4, 1]],
    N: [[1, 2], [1, 3]],
    NE: [[0, 2], [0, 3]],
    E: [[3, 0], [3, 1]],
    SE: [[5, 1], [5, 2]],
    S: [[6, 3], [7, 2]],
    SW: [[5, 3], [6, 1]],
    W: [[4, 2], [4, 3]],
    NW: [[1, 0], [1, 1]],
}

const COLS = 8
const ROWS = 4
const TICK_MS = 100 // the pet thinks and moves once every 100 ms, in steps
const FADE_MS = 200
const HEART_MS = 1000
const HEARTS_PER_CLICK = 2
const HEART_PATH =
    "M12 21C12 21 3 14.6 3 8.6C3 5.6 5.2 3.5 7.9 3.5C9.6 3.5 11.1 4.4 12 5.8C12.9 4.4 14.4 3.5 16.1 3.5C18.8 3.5 21 5.6 21 8.6C21 14.6 12 21 12 21Z"

/** Percentages keep the frame correct at any pet size. */
function framePosition(name: string, frame: number): string {
    const set = SPRITES[name] || SPRITES.idle
    const [col, row] = set[((frame % set.length) + set.length) % set.length]
    return `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`
}

/** One of the 8 run sprites for a travel vector (screen coords, y points down). */
function directionOf(vx: number, vy: number): string {
    const length = Math.hypot(vx, vy) || 1
    const ux = vx / length
    const uy = vy / length
    let direction = ""
    if (uy < -0.5) direction += "N"
    if (uy > 0.5) direction += "S"
    if (ux < -0.5) direction += "W"
    if (ux > 0.5) direction += "E"
    return direction
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

type Mode = "follow" | "runAway" | "toggler"
type Pet = "cat" | "dog" | "custom"

interface Props {
    mode?: Mode
    pet?: Pet
    customSprite?: string
    size?: number
    speed?: number
    stopDistance?: number
    fleeDistance?: number
    hearts?: boolean
    heartColor?: string
    idleAnimations?: boolean
    reduceMotion?: boolean
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 600
 * @framerIntrinsicHeight 400
 */
export default function PlayfulPet(props: Props) {
    const {
        mode = "follow",
        pet = "cat",
        customSprite,
        size = 48,
        speed = 10,
        stopDistance = 48,
        fleeDistance = 150,
        hearts = true,
        heartColor = "#FFC8FA",
        idleAnimations = true,
        reduceMotion = true,
        style,
    } = props

    const sprite =
        pet === "custom" && customSprite
            ? customSprite
            : pet === "dog"
              ? DOG_SPRITE
              : CAT_SPRITE

    const rootRef = React.useRef<HTMLDivElement>(null)
    const petRef = React.useRef<HTMLDivElement>(null)
    const pointer = React.useRef({ seen: false, x: 0, y: 0 })
    const onPetClick = React.useRef<() => void>(() => {})

    // Tunables are read through a ref so changing them never restarts the pet.
    const options = React.useRef({
        size,
        speed,
        stopDistance,
        fleeDistance,
        hearts,
        heartColor,
        idleAnimations,
    })
    options.current = {
        size,
        speed,
        stopDistance,
        fleeDistance,
        hearts,
        heartColor,
        idleAnimations,
    }

    // On the Framer canvas (and in exports) show a still pet instead of running.
    const target = RenderTarget.current()
    const isStatic =
        target === RenderTarget.canvas ||
        target === RenderTarget.export ||
        target === RenderTarget.thumbnail

    /* ---- cursor tracking (survives mode / pet changes) ---- */
    React.useEffect(() => {
        if (isStatic) return
        const track = (event: PointerEvent) => {
            pointer.current.seen = true
            pointer.current.x = event.clientX
            pointer.current.y = event.clientY
        }
        window.addEventListener("pointermove", track, { passive: true })
        window.addEventListener("pointerdown", track, { passive: true })
        return () => {
            window.removeEventListener("pointermove", track)
            window.removeEventListener("pointerdown", track)
        }
    }, [isStatic])

    /* ---- the pet's brain: restarts when mode or sprite changes ---- */
    React.useEffect(() => {
        const root = rootRef.current
        const el = petRef.current
        if (!root || !el || isStatic) return

        const state = {
            x: 0,
            y: 0,
            centered: false,
            frameCount: 0,
            idleTime: 0,
            idleAnimation: null as string | null,
            idleAnimationFrame: 0,
            asleep: mode === "toggler", // the toggler pet starts asleep
            tiredTicks: 0,
            sleepFrame: 0,
        }
        const liveHearts = new Set<HTMLElement>()

        const setSprite = (name: string, frame: number) => {
            el.style.backgroundPosition = framePosition(name, frame)
        }

        const measure = () => {
            const rect = root.getBoundingClientRect()
            const width = root.offsetWidth || rect.width
            const height = root.offsetHeight || rect.height
            return {
                rect,
                width,
                height,
                // > 1 or < 1 when a parent is scaled (e.g. Framer preview zoom)
                scaleX: width ? rect.width / width || 1 : 1,
                scaleY: height ? rect.height / height || 1 : 1,
            }
        }

        const bounds = (width: number, height: number) => {
            const half = options.current.size / 2
            return {
                minX: half,
                maxX: Math.max(half, width - half),
                minY: half,
                maxY: Math.max(half, height - half),
            }
        }

        const clamp = (value: number, min: number, max: number) =>
            Math.min(Math.max(min, value), max)

        const place = () => {
            el.style.left = `${Math.round(state.x)}px`
            el.style.top = `${Math.round(state.y)}px`
        }

        const center = () => {
            const { width, height } = measure()
            if (!width || !height) return false
            state.x = width / 2
            state.y = height / 2
            state.centered = true
            place()
            return true
        }

        const resetIdleAnimation = () => {
            state.idleAnimation = null
            state.idleAnimationFrame = 0
        }

        /* Sitting still. After a while the pet may nap or scratch. */
        const idle = (width: number, height: number, allowNap: boolean) => {
            const o = options.current
            state.idleTime += 1

            // roughly once every 20 seconds of sitting
            if (
                o.idleAnimations &&
                state.idleTime > 10 &&
                state.idleAnimation == null &&
                Math.floor(Math.random() * 200) === 0
            ) {
                const choices = ["scratchSelf"]
                if (allowNap) choices.push("sleeping")
                if (state.x < o.size) choices.push("scratchWallW")
                if (state.y < o.size) choices.push("scratchWallN")
                if (state.x > width - o.size) choices.push("scratchWallE")
                if (state.y > height - o.size) choices.push("scratchWallS")
                state.idleAnimation =
                    choices[Math.floor(Math.random() * choices.length)]
            }

            switch (state.idleAnimation) {
                case "sleeping":
                    if (state.idleAnimationFrame < 8) {
                        setSprite("tired", 0)
                        break
                    }
                    setSprite(
                        "sleeping",
                        Math.floor(state.idleAnimationFrame / 4)
                    )
                    if (state.idleAnimationFrame > 192) {
                        resetIdleAnimation()
                        return
                    }
                    break
                case "scratchSelf":
                case "scratchWallN":
                case "scratchWallS":
                case "scratchWallE":
                case "scratchWallW":
                    setSprite(state.idleAnimation, state.idleAnimationFrame)
                    if (state.idleAnimationFrame > 9) {
                        resetIdleAnimation()
                        return
                    }
                    break
                default:
                    setSprite("idle", 0)
                    return
            }
            state.idleAnimationFrame += 1
        }

        /* FOLLOW — chase the cursor, sit down once close enough. */
        const follow = (
            targetX: number,
            targetY: number,
            width: number,
            height: number,
            allowNap: boolean
        ) => {
            const o = options.current
            const diffX = state.x - targetX
            const diffY = state.y - targetY
            const distance = Math.hypot(diffX, diffY)

            if (distance < o.speed || distance < o.stopDistance) {
                idle(width, height, allowNap)
                return
            }

            resetIdleAnimation()

            // Startled look before chasing, longer the longer it had been resting.
            if (state.idleTime > 1) {
                setSprite("alert", 0)
                state.idleTime = Math.min(state.idleTime, 7)
                state.idleTime -= 1
                return
            }

            const stepX = (-diffX / distance) * o.speed
            const stepY = (-diffY / distance) * o.speed
            setSprite(directionOf(stepX, stepY), state.frameCount)

            const b = bounds(width, height)
            state.x = clamp(state.x + stepX, b.minX, b.maxX)
            state.y = clamp(state.y + stepY, b.minY, b.maxY)
        }

        /* RUN AWAY — bolt in the opposite direction while the cursor is near. */
        const flee = (
            targetX: number,
            targetY: number,
            width: number,
            height: number
        ) => {
            const o = options.current
            let diffX = state.x - targetX
            let diffY = state.y - targetY
            let distance = Math.hypot(diffX, diffY)

            if (!pointer.current.seen || distance >= o.fleeDistance) {
                idle(width, height, true)
                return
            }

            resetIdleAnimation()
            state.idleTime = 0

            if (distance < 0.001) {
                diffX = 0
                diffY = -1
                distance = 1
            }

            const b = bounds(width, height)
            const stepX = (diffX / distance) * o.speed
            const stepY = (diffY / distance) * o.speed
            let nextX = clamp(state.x + stepX, b.minX, b.maxX)
            let nextY = clamp(state.y + stepY, b.minY, b.maxY)

            // Against a wall: slide along it at full speed instead of pushing into it.
            const hitX = Math.abs(nextX - state.x) < Math.abs(stepX) - 0.01
            const hitY = Math.abs(nextY - state.y) < Math.abs(stepY) - 0.01
            if (hitX && !hitY) {
                const sign =
                    Math.abs(stepY) > 0.01
                        ? Math.sign(stepY)
                        : state.y < height / 2
                          ? 1
                          : -1
                nextY = clamp(state.y + sign * o.speed, b.minY, b.maxY)
            } else if (hitY && !hitX) {
                const sign =
                    Math.abs(stepX) > 0.01
                        ? Math.sign(stepX)
                        : state.x < width / 2
                          ? 1
                          : -1
                nextX = clamp(state.x + sign * o.speed, b.minX, b.maxX)
            }

            const movedX = nextX - state.x
            const movedY = nextY - state.y
            if (Math.hypot(movedX, movedY) < 0.5) {
                setSprite("alert", 0) // cornered, nowhere left to run
                return
            }

            setSprite(directionOf(movedX, movedY), state.frameCount)
            state.x = nextX
            state.y = nextY
        }

        /* TOGGLER — asleep until clicked; ignores the cursor while asleep. */
        const snooze = () => {
            if (state.tiredTicks > 0) {
                state.tiredTicks -= 1
                setSprite("tired", 0)
                return
            }
            setSprite("sleeping", Math.floor(state.sleepFrame / 4))
            state.sleepFrame += 1
        }

        const tick = () => {
            const { rect, width, height, scaleX, scaleY } = measure()
            if (!width || !height) return
            if (!state.centered && !center()) return

            state.frameCount += 1

            // Until the cursor has moved, the pet's target is where it already is.
            let targetX = state.x
            let targetY = state.y
            if (pointer.current.seen) {
                targetX = (pointer.current.x - rect.left) / scaleX
                targetY = (pointer.current.y - rect.top) / scaleY
            }

            if (mode === "runAway") flee(targetX, targetY, width, height)
            else if (mode === "toggler" && state.asleep) snooze()
            else follow(targetX, targetY, width, height, mode !== "toggler")

            // keeps the pet inside if the frame was resized
            const b = bounds(width, height)
            state.x = clamp(state.x, b.minX, b.maxX)
            state.y = clamp(state.y, b.minY, b.maxY)
            place()
        }

        /* Hearts pop out where the pet was clicked and stay there as they fade. */
        const spawnHearts = () => {
            const o = options.current
            const heartSize = Math.round(o.size * 0.7)
            for (let i = 0; i < HEARTS_PER_CLICK; i++) {
                const heart = document.createElement("div")
                heart.setAttribute("aria-hidden", "true")
                heart.innerHTML = `<svg viewBox="0 0 24 24" width="${heartSize}" height="${heartSize}" style="display:block"><path fill="currentColor" d="${HEART_PATH}"/></svg>`
                const from = "translate(-50%, -50%) scale(0)"
                const to = "translate(-50%, -50%) scale(1)"
                Object.assign(heart.style, {
                    position: "absolute",
                    left: `${state.x + (Math.random() - 0.5) * o.size}px`,
                    top: `${state.y + (Math.random() - 0.5) * o.size}px`,
                    color: o.heartColor,
                    pointerEvents: "none",
                    zIndex: "2",
                    transform: from,
                })
                root.appendChild(heart)
                liveHearts.add(heart)

                const remove = () => {
                    heart.remove()
                    liveHearts.delete(heart)
                }
                if (typeof heart.animate === "function") {
                    const animation = heart.animate(
                        [
                            { transform: from, opacity: 1 },
                            { transform: to, opacity: 0 },
                        ],
                        {
                            duration: HEART_MS,
                            easing: "ease-out",
                            fill: "forwards",
                        }
                    )
                    animation.onfinish = remove
                    animation.oncancel = remove
                } else {
                    window.setTimeout(remove, HEART_MS)
                }
            }
        }

        /* ---- start ---- */
        setSprite(state.asleep ? "sleeping" : "idle", 0)
        center()
        el.style.opacity = "1"
        const fade =
            typeof el.animate === "function"
                ? el.animate([{ opacity: 0 }, { opacity: 1 }], {
                      duration: FADE_MS,
                      easing: "linear",
                  })
                : null

        const prefersStill =
            reduceMotion &&
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches

        let raf = 0
        if (prefersStill) {
            // Stay put, but stay centred if the frame is resized.
            el.style.left = "50%"
            el.style.top = "50%"
        } else {
            onPetClick.current = () => {
                if (mode === "toggler") {
                    resetIdleAnimation()
                    if (state.asleep) {
                        state.asleep = false
                        state.idleTime = 0
                        setSprite("idle", 0)
                    } else {
                        state.asleep = true
                        state.tiredTicks = 1 // a quick yawn first
                        state.sleepFrame = 0
                        setSprite("tired", 0)
                    }
                    return
                }
                if (options.current.hearts) spawnHearts()
            }

            let last = 0
            const loop = (time: number) => {
                raf = window.requestAnimationFrame(loop)
                if (!last) last = time
                const elapsed = time - last
                if (elapsed < TICK_MS) return
                // after a long pause (hidden tab) resume instead of catching up
                last = elapsed > TICK_MS * 5 ? time : last + TICK_MS
                tick()
            }
            raf = window.requestAnimationFrame(loop)
        }

        return () => {
            window.cancelAnimationFrame(raf)
            onPetClick.current = () => {}
            if (fade) fade.cancel()
            liveHearts.forEach((heart) => heart.remove())
            liveHearts.clear()
        }
    }, [mode, sprite, isStatic, reduceMotion])

    return (
        <div
            ref={rootRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                // never blocks what is underneath (left alone on the canvas so
                // the layer stays easy to select)
                pointerEvents: isStatic ? undefined : "none",
                ...style,
            }}
        >
            <div
                ref={petRef}
                aria-hidden="true"
                onClick={() => onPetClick.current()}
                style={{
                    position: "absolute",
                    width: size,
                    height: size,
                    marginLeft: -size / 2,
                    marginTop: -size / 2,
                    backgroundImage: `url("${sprite}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                    imageRendering: "pixelated",
                    pointerEvents: "auto",
                    cursor: "pointer",
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    zIndex: 1,
                    ...(isStatic
                        ? {
                              left: "50%",
                              top: "50%",
                              backgroundPosition: framePosition(
                                  mode === "toggler" ? "sleeping" : "idle",
                                  0
                              ),
                          }
                        : { opacity: 0 }), // revealed with a fade once placed
                }}
            />
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*  Property controls                                                          */
/* -------------------------------------------------------------------------- */

addPropertyControls(PlayfulPet, {
    mode: {
        type: ControlType.Enum,
        title: "Mode",
        options: ["follow", "runAway", "toggler"],
        optionTitles: ["Follow", "Run Away", "Toggler"],
        defaultValue: "follow",
        description:
            "Follow chases the cursor. Run Away flees from it. Toggler sleeps until clicked, then follows; click again to send it back to sleep.",
    },
    pet: {
        type: ControlType.Enum,
        title: "Pet",
        options: ["cat", "dog", "custom"],
        optionTitles: ["Cat", "Dog", "Custom"],
        defaultValue: "cat",
    },
    customSprite: {
        type: ControlType.Image,
        title: "Sprite",
        description: "A 256×128 sheet in the same 8×4 layout as the cat.",
        hidden: (props) => props.pet !== "custom",
    },
    size: {
        type: ControlType.Number,
        title: "Size",
        min: 16,
        max: 128,
        step: 8,
        unit: "px",
        defaultValue: 48,
        displayStepper: true,
    },
    speed: {
        type: ControlType.Number,
        title: "Speed",
        min: 1,
        max: 30,
        step: 1,
        defaultValue: 10,
        description: "Pixels per step. The pet takes 10 steps a second.",
    },
    stopDistance: {
        type: ControlType.Number,
        title: "Stop At",
        min: 0,
        max: 300,
        step: 1,
        unit: "px",
        defaultValue: 48,
        description: "How close to the cursor it gets before sitting down.",
        hidden: (props) => props.mode === "runAway",
    },
    fleeDistance: {
        type: ControlType.Number,
        title: "Flee Within",
        min: 20,
        max: 600,
        step: 10,
        unit: "px",
        defaultValue: 150,
        description: "It runs while the cursor is closer than this.",
        hidden: (props) => props.mode !== "runAway",
    },
    hearts: {
        type: ControlType.Boolean,
        title: "Hearts",
        defaultValue: true,
        description: "Clicking the pet pops two hearts.",
        hidden: (props) => props.mode === "toggler",
    },
    heartColor: {
        type: ControlType.Color,
        title: "Heart Color",
        defaultValue: "#FFC8FA",
        hidden: (props) =>
            props.mode === "toggler" || props.hearts === false,
    },
    idleAnimations: {
        type: ControlType.Boolean,
        title: "Idle Fidgets",
        defaultValue: true,
        description: "Occasional nap or scratch when left alone.",
    },
    reduceMotion: {
        type: ControlType.Boolean,
        title: "Reduce Motion",
        defaultValue: true,
        description:
            "Keep the pet still for visitors whose device asks for reduced motion.",
    },
})
