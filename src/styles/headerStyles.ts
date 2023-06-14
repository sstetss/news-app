import { CSSObject, keyframes } from "@emotion/react"

export const arrowStyles: CSSObject = {
    top: '10px',
    right: '40px'
}

export const arrowActiveStyles: CSSObject = {
    transform: 'rotate(180deg)',
    right: '-6px', 
    bottom: '-8px'
}

export const arrowBoxAfterStyles: CSSObject = { 
    content: '""',
    pos: 'absolute', 
    w: '10px', 
    h: '1px', 
    top: '-3.5px', 
    right: '-2px', 
    bg: 'black', 
    transform: 'rotate(45deg)' 
}

export const arrowBoxBeforeStyles: CSSObject = {
    content: '""',
    pos: 'absolute',
    w: '10px',
    h: '1px',
    top: '3.5px',
    right: '-2px',
    bg: 'black',
    boxShadow: '0 3px 5px rgba(0, 0, 0, .2)',
    transform: 'rotate(-45deg)',
}

export const animationKeyframes = keyframes`
from {
     margin-right: 100%;
     width: 300%;
   }
 
to {
     margin-right: 0%;
     width: 100%;
}
`

export const slideIn = `${animationKeyframes} 1s`