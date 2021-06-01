import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'

import { Feather } from '@expo/vector-icons'
import { ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles'

export default function Home() {
    return (
        <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{ flex: 1, justifyContent: 'center' }}
        >
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#1ddbb9"
            />
            <Menu />
            <ContainerLogo>
                <Logo source={require('../../assets/logo.png')} />
            </ContainerLogo>

            <ContainerContent>
                <Title>Encurtador de URL</Title>
                <Subtitle>Cole seu link aqui para encurtar</Subtitle>

                <ContainerInput>
                    <BoxIcon>
                        <Feather name="link" size={12} color='#FFF' />
                    </BoxIcon>
                    <Input 
                        placeholder="Cole seu link aqui."
                        placeholderTextColor="#FFF"
                    />
                </ContainerInput>

                <ButtonLink>
                    <ButtonLinkText>Gerar link</ButtonLinkText>
                </ButtonLink>
            </ContainerContent>

        </LinearGradient>
    )
}