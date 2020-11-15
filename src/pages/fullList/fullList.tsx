import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import List from '../../infrastructure/list/list'

import ListEntity from '../../domain/list/entity/list'

import styles from './fullList.module.css'


interface FullListPageProps extends RouteComponentProps<any, any,{ list?: ListEntity }> {}

const FullListPage = (props: FullListPageProps) => {
    let givenList;
    if(!props.location.state?.list) {
        // search data by id and update the list attributes
        givenList = new ListEntity(1, "Jorge", "Piezas de ordenador", "technology", 123432, ["Placa base", "RAM", "Procesador", "Gráfica"] )
    } else {
        givenList = props.location.state.list
    }

    const [list, changeList] = React.useState<ListEntity>(givenList)

    return (
        <div className={ styles.listBackground } onClick={ () => props.history.replace("/search") }>
            <div className={ styles.listContainer } onClick={ (event) => { event.stopPropagation() } }>
            <List 
                type="extended"
                id={ list.getId }
                author={ list.getAuthor } 
                name={ list.getName } 
                category={ list.getCategory } 
                likes={ list.getLikes } 
                elements={ list.getElements }
            />
            </div>
        </div>
    )
}

export default FullListPage