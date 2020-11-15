import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import List from '../../infrastructure/list/list'
import ConfigContext from '../../shared/configContext'

import ListEntity from '../../domain/list/entity/list'

import styles from './fullList.module.css'
import { exit } from 'process'


interface FullListPageProps extends RouteComponentProps<{id: string}, any, any> {}

const FullListPage = (props: FullListPageProps) => {
    /* Context */

    const { listRepository } = useContext(ConfigContext)

    /* State */

    const [list, changeList] = React.useState<ListEntity>(
        !props.location.state?.list ?
        listRepository.findById(+props.match.params.id) :
        props.location.state.list
    )

    /* Methods */

    const closePage = () => {
        props.history.replace('/search')
    }

    /* Render */

    return (
        <div className={ styles.listBackground } onClick={ closePage }>
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