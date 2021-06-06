import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
    flex: 1;
    background-color: #132742;
`;

export const Title = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
    margin-left: 20px;
    font-size: 33px;
    font-weight: bold;
    color: #FFF;
`;

export const ContainerEmpty = styled.View`
    padding: 10px;
    margin: 7px 20px;
    border-radius: 7px;
    background-color: rgba(255,255,255, 0.30);
`;  

export const WarningText = styled.Text`
    color: white;
    font-size: 15px;
`;

export const ListLinks = styled.FlatList``;