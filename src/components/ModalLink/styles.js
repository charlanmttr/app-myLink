import styled from 'styled-components/native'

export const ModalContainer = styled.View`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0 15px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0;
`;

export const LinkArea = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ActionArea = styled.View`
    flex-direction: row;
`;

export const ShortLinkArea = styled.TouchableOpacity`
    height: 45px;
    flex: 1;
    background-color: #172742;
    border-radius: 7px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
`;

export const ShortLinkUrl = styled.Text`
    width: 80%;
    color: #FFF;
    font-size: 16px;
`;

export const LongUrl = styled.Text`
    font-size: 17px;
    color: #a7a7a7;
    margin-bottom: 30px;
`;

export const Title = styled.Text`
    font-size: 33px;
    font-weight: bold;
    color: #1CCBAE;
`;

export const OpenWebView = styled.TouchableOpacity`
    background-color: #1CCBAE;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border-radius: 7px;
    padding: 0 5px;
    margin-left: 10px;
`;