import styled from 'styled-components/native'
import { StatusBar, Platform } from 'react-native'

export const ButtonMenu = styled.TouchableOpacity`
    /*
    verifica se é IOs ou Android
        ios = altura do statusBar + 60px
        android = 13px
    */  
    top: ${Platform.OS === 'ios' ? StatusBar.currentHeight + 60+'px' : 13+'px'}; 
    /* define que o icone ficará no topo*/
    position: absolute;
    margin: 0 20px;
    justify-content: space-around;
`;