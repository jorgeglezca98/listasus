import React from 'react'
import ListRepository from '../domain/list/repository/listRepository'
import InMemoryListRepository from '../pages/search/inMemoryListRepository'

const defaultConfig : {
    listRepository: ListRepository
} = {
    listRepository: new InMemoryListRepository()
}

const ConfigContext = React.createContext(defaultConfig)

export default ConfigContext