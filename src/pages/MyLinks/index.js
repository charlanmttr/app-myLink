import React, { useState, useEffect } from 'react'
import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './styles'
import { useIsFocused } from '@react-navigation/native'
import { ActivityIndicator, Modal } from 'react-native'

import { getLinksSave, deleteLink } from '../../utils/storeLinks'
import ModalLink from '../../components/ModalLink'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBarPage'
import ListItem from '../../components/ListItem'

export default function MyLinks({ navigation }) {
    /* garante que toda vez que a pagina for "focada" o useEffect seja executado novamente */
    const isFocused = useIsFocused();

    const [links, setLinks] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalData, setModalData] = useState({})
    const [loading, setLoading] = useState(true)

    function handleItem(item) {
        setModalData(item)
        setModalVisible(true)
    }

    async function handleDelete(id) {
        const result = await deleteLink('mylinkapp.links', links, id)
        setLinks(result)
    }

    useEffect(() => {
        async function getLinks() {
            const result = await getLinksSave('mylinkapp.links')
            setLinks(result)
            setLoading(false)
        }

        getLinks()
    }, [isFocused])

    return (
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Menu />
            <Title>Meus Links</Title>

            {
                loading && (
                    <ContainerEmpty>
                        <ActivityIndicator />
                    </ContainerEmpty>
                )
            }

            {
                !loading && links.length === 0 && (
                    <ContainerEmpty>
                        <WarningText>Você ainda não possui nenhum link :c</WarningText>
                    </ContainerEmpty>
                )
            }

            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
                contentContainerStyle={{ paddingBotom: 20 }}
                showVerticalScrollIndicator={false}
            />

            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
            >
                <ModalLink
                    onClose={() => setModalVisible(false)}
                    data={modalData}
                    navigation={navigation}
                />
            </Modal>
        </Container>
    )
}