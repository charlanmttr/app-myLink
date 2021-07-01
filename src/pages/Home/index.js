import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles'

import api from '../../services/api'
import { saveLink } from '../../utils/storeLinks'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import ModalLink from '../../components/ModalLink'


export default function Home({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const [data, setData] = useState({})

    async function handleShortLink() {
        setLoading(true)

        try {
            const response = await api.post('/shorten', {
                long_url: input
            })

            Keyboard.dismiss();
            setLoading(false)
            setInput('')

            saveLink('mylinkapp.links', response.data )

            setData(response.data)
            setModalVisible(true)

        } catch (error) {
            Keyboard.dismiss();
            setLoading(false)
            setInput('');

            alert('Ops, deu algo errado. Mensagem: ' + error.message);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}
            >
                <StatusBarPage
                    barStyle="light-content"
                    backgroundColor="#1ddbb9"
                />

                <Menu />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >
                    <ContainerLogo>
                        <Logo source={require('../../assets/logo.png')} />
                    </ContainerLogo>
                    <ContainerContent>
                        <Title>Encurtador de URL</Title>
                        <Subtitle>Cole seu link aqui para encurtar</Subtitle>
                        <ContainerInput>
                            <BoxIcon>
                                <Feather name="link" size={20} color='#FFF' />
                            </BoxIcon>
                            <Input
                                placeholder="Cole seu link aqui."
                                placeholderTextColor="#FFF"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="url"
                                value={input}
                                onChangeText={text => setInput(text)}
                            />
                        </ContainerInput>
                        <ButtonLink onPress={() => handleShortLink()}>
                            {                                 
                                (loading) ? (
                                    <ActivityIndicator color="#121212" size={24} />
                                ) : (
                                    <ButtonLinkText>Gerar link</ButtonLinkText>
                                )
                            }
                        </ButtonLink>
                    </ContainerContent>
                </KeyboardAvoidingView>

                <Modal
                    visible={modalVisible}
                    transparent
                    animationType="slide"
                >
                    <ModalLink 
                        onClose={() => setModalVisible(false)}
                        data={data}
                        navigation={navigation}
                    />
                </Modal>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}