import React from 'react'
import { View } from 'react-native'
import { Container, Title, ListLinks } from './styles'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBarPage'
import ListItem from '../../components/ListItem'

export default function MyLinks() {
    return (
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Menu />
            <Title>Meus Links</Title>
            <ListLinks
                data={[{ id: 1, link: 'facebook.com' }, { id: 2, link: 'youtube.com' }]}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ListItem data={item} />}
                contentContainerStyle={{ paddingBotom: 20 }}
                showVerticalScrollIndicator={false}
            />
        </Container>
    )
}