import React from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Clipboard from 'expo-clipboard'
import { ModalContainer, Container, Header, LinkArea, ActionArea, ShortLinkArea, ShortLinkUrl, Title, LongUrl, OpenWebView } from './styles'

export default function ModalLink({ onClose, data, navigation }) {

    function copyLink() {
        Clipboard.setString(data.link)
        alert('Link copiado para a área de transferência!')
    }

    async function handleShare() {
        try {
            const result = await Share.share({
                message: `Link encurtado: ${data.link}`,
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log(result.activityType)
                } else {
                    console.log('Será compartilhado.')
                }
            } else if (result.action === Share.dismissedAction) {
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
                    <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>
                    <ActionArea>
                        <ShortLinkArea
                            activeOpacity={1}
                            onPress={copyLink}
                        >
                            <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
                            <TouchableOpacity
                                onPress={copyLink}>
                                <Feather
                                    name="copy"
                                    color="#FFF"
                                    size={25}
                                />
                            </TouchableOpacity>
                        </ShortLinkArea>

                        <OpenWebView
                            onPress={() => {
                                onClose()
                                navigation.navigate("WebView", { link: data.link })
                            }
                            }>
                            <Feather
                                name="external-link"
                                color="#FFF"
                                size={25}
                            />
                        </OpenWebView>
                    </ActionArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}
