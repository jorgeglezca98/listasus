import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import List from '../../infrastructure/list/list'

import ListEntity from '../../domain/list/entity/list'

import styles from './fullList.module.css'


interface FullListPageProps extends RouteComponentProps<any, any,{ list?: ListEntity }> {}


class FullListPage extends React.Component<FullListPageProps> {

    private list: ListEntity

    constructor(props: FullListPageProps) {
        super(props)

        if(!props.location.state || !props.location.state.list) {
            // search data by id and update the list attributes
            this.list = new ListEntity(1, "Jorge", "Piezas de ordenador", "technology", 123432, ["Placa base", "RAM", "Procesador", "Gráfica"] )
        } else {
            this.list = props.location.state.list
        }
    }

    render() {
        return (
            <div className={ styles.listBackground } onClick={ () => this.props.history.replace("/search") }>
                <div className={ styles.listContainer } onClick={ (event) => { event.stopPropagation() } }>
                <List 
                    type="extended"
                    id={ this.list.getId }
                    author={ this.list.getAuthor } 
                    name={ this.list.getName } 
                    category={ this.list.getCategory } 
                    likes={ this.list.getLikes } 
                    elements={ this.list.getElements }
                />
                </div>
            </div>
        )
    }
}

export default FullListPage