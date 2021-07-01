import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ItemArea, LinkText, ActionContainer } from './styles'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem({ data, selectedItem, deleteItem }) {
    function RightActions() {
        return (
            <ActionContainer onPress={() => deleteItem(data.id)}>
                <Feather
                    name="trash"
                    color="#FFF"
                    size={24}
                />
            </ActionContainer>
        )
    }

    return (
        <View>
            <Swipeable renderRightActions={RightActions}>
                <ItemArea activeOpacity={0.8} onPress={() => selectedItem(data)}>
                    <Feather
                        name="link"
                        size={24}
                        color="#FFF"
                    />
                    <LinkText numberOfLines={1}>{data.long_url}</LinkText>
                </ItemArea>
            </Swipeable>
        </View>
    )
}
