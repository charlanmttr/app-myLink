import styled from 'styled-components/native'

export const ItemArea = styled.TouchableOpacity`
    flex-direction: row;
    padding: 10px;
    margin: 7px 10px;
    background-color: rgba(255,255,255, 0.30);
    border-radius: 7px;
`;

export const LinkText = styled.Text`
    font-size: 20px;
    color: #FFF;
    padding-left: 10px;
    padding-right: 20px;
`;

export const ActionContainer = styled.TouchableOpacity`
    width: 12%;
    border-radius: 7px;
    margin: 7px 10px;
    background-color: red;
    justify-content: center;
    align-items: center ;
`; 