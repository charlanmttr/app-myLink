import React from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Clipboard from 'expo-clipboard'
import { ModalContainer, Container, Header, LinkArea, ShortLinkArea, ShortLinkUrl, Title, LongUrl } from './styles'


export default function ModalLink({ onClose }) {

    function copyLink() {
        Clipboard.setString('https://seulink.com.br')
        alert('link copiado')
    }

    async function handleShare() {
        try {
            const result = await Share.share({
                message: `Link: https://seulink.com`,
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    /* fechou a dialog, não faz nada */
                    console.log(result.activityType)
                } else {
                    /* será compartilhado */
                    console.log('Será compartilhado.')
                }
            }else if(result.action === Share.dismissedAction){
                console.log('Modal foi fechado.')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <ModalContainer>
            <TouchableWithoutFeedback onPress={() => onClose()}>
                <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>
            <Container>
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Feather
                            name="x"
                            color="#212743"
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShare}>
                        <Feather
                            name="share"
                            color="#212743"
                            size={30}
                        />
                    </TouchableOpacity>
                </Header>
                <LinkArea>
                    <Title>Link encurtado:</Title>
                    <LongUrl numberOfLines={1}>https://facebook.com</LongUrl>
                    <ShortLinkArea
                        activeOpacity={1}
                        onPress={copyLink}
                    >
                        <ShortLinkUrl numberOfLines={1}>https://bitly.example</ShortLinkUrl>
                        <TouchableOpacity onPress={copyLink}>
                            <Feather
                                name="copy"
                                color="#FFF"
                                size={25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}
