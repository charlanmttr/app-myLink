import React from 'react'
import { Feather } from '@expo/vector-icons'
import { ItemArea, LinkText, LinkTextArea } from './styles'

export default function ListItem({ data }) {
    return (
        <ItemArea>
            <Feather
                name="paperclip"
                size={25}
                color="#FFF"
            />
            <LinkTextArea>
                <LinkText numberOfLines={1}>{data.link}</LinkText>
            </LinkTextArea>
        </ItemArea>
    )
}
