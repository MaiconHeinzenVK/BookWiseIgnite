import { styled } from "@/styles/stitches.config";

export const Container = styled('div',{
    maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
    marginLeft: 'auto',
    height: '100vh',
    display: 'flex',
    
    alignItems: 'center',
})

export const Hero = styled('div',{
    maxWidth: 480,

})

export const Preview = styled('div',{
    paddingRight: '$8',
    overflow: 'hidden',

    '@media(max-width: 600px': {
        display: 'none',
    }
})

export const ButtonsWrapper = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    marginTop: '$4'
})

export const Button = styled('button',{
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',

    width: '100%',
    height: '72',
    maxWidth: 372,
    padding: "$4",
    borderRadius: '$md',
    border: 'none',
    gap: '$5',

    fontSize: '$lg',
    fontWeight: '$bold',
    color: "$gray200",
    background: '$gray600',

    cursor: "pointer",

    svg: {
        color: '$purple100',
    },

    '&:hover': {
        backgroundColor: '$gray500',
        transition: 'all 0.5s ease-in-out',
    }
})

