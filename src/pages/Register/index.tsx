import { Heading, Text } from '@ignite-ui/react'
import { ButtonsWrapper, Container, Hero, Preview, Button} from "./styles";

import loginPreview from '@/assets/loginPreview.png'
import Image from 'next/image';
import google from '@/../public/google-icon.svg'
import github from '@/../public/github-icon.svg'
import lauchRocket from '@/../public/RocketLaunch-icon.svg'
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function Register() {
    const router = useRouter()

    async function handleSingIn(provider: string) {
        if (provider === 'google') {
            await signIn('google', {callbackUrl: '/home'})
        } else if (provider === 'github') {
            await signIn('github', {callbackUrl: '/home'})
        } else router.push('/home')

    }
    return(
        <Container>
            <Preview>
                <Image 
                    src={loginPreview}
                    height={598}
                    quality={100}
                    priority
                    alt='Logo da aplicação ao fundo mulher lendo livro'/>
                
            </Preview>
            <Hero>
                <Heading as='h1' size="2xl">
                    Boas vindas!
                </Heading>
                <Text>Faça seu login ou acesse como visitante.</Text>
                <ButtonsWrapper>
                    <Button onClick={() => handleSingIn('google')}>
                        <Image 
                            src={google}
                            height={32}
                            priority
                            alt='Logotipo do Google'
                        />
                        Entrar com o Google
                    </Button>
                    <Button onClick={() => handleSingIn('github')}>
                        <Image 
                            src={github}
                            height={32}
                            priority
                            alt='Logotipo do Google'
                        />
                        Entrar com o Github
                    </Button>
                    <Button>
                        <Image 
                            src={lauchRocket}
                            height={32}
                            priority
                            alt='Logotipo do Google'  
                        /> Entrar como visitante
                    </Button>
                </ButtonsWrapper>
            </Hero>

            

            
        </Container>
    )
}