import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
      boxSizing: 'border-box',
      padding: 0,
      border: 0,
    },
  
    body: {
      backgroundColor: '$gray900',
      color: '$gray100',
      '-webkit-font-smoothing': 'antialiased',
    },
  })
  
