/* funções para salvar dados, ler e excluir */

import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key)

    /* se tiver algo armazenado retorna um array com os links, se não retorna um array vazio */
    let linkSaves = JSON.parse(myLinks) || [] 

    return linkSaves
}

export async function saveLink(key, newLink){
    /* busca todos os links salvos */
    let linksStored = await getLinksSave(key)

    /* verifica se o novo link já existe na lista (a id de cada item é a URL), se existir não será adicionado */
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('O link já existe na lista.')
        return
    }

    linksStored.push(newLink)
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
}

export async function deleteLink(key, links, id){
    let myLinks = links.filter((item) => item.id !== id)

    await AsyncStorage.setItem(key, JSON.stringify(myLinks))

    console.log(`link ${id} deletado do storage`)
    return myLinks
}