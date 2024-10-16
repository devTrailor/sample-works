import { cubicBezier } from "framer-motion"

export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            x: direction === 'up' ? '-100%' : direction === "down" ? '100%' : 0,
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: { type: 'tween', duration: 1.2, delay: delay, ease: cubicBezier(.35, .17, .3, .86) }
        },
    }
}