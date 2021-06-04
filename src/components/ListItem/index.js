import React from 'react'
import { Feather } from '@expo/vector-icons'
import { ItemArea, LinkText } from './styles'

export default function ListItem({ data }) {
    return (
        <ItemArea activeOpacity={0.8} onPress={ () => {}}>
            <Feather
                name="link"
                size={24}
                color="#FFF"
            />
            <LinkText numberOfLines={1}>{data.link}</LinkText>
        </ItemArea>
    )
}
