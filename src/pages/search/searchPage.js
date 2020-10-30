import React from 'react'
import List from '../../infrastructure/list/list'
import ListEntity from '../../domain/list/entity/list'

import styles from './searchPage.module.css'

class SearchPage extends React.Component {

    constructor (props) {
        super(props)
        if(this.props.search) {
             // search results and save them
        } else {
            this.state = {
                searchResults : Array(20).fill(
                    new ListEntity(1, "Jorge", "Piezas de ordenador", "technology", 123432, ["Placa base", "RAM", "Procesador", "Gráfica"] )
                )
            }
        }
    }

    render () {
        return (
            <div className={styles.searchResults}>
                <p>{this.state.searchResults.length === 0 ? "No lists found" : `${this.state.searchResults.length} results` }</p>
                <div className={styles.listsContainer}>
                    { this.state.searchResults.map((list) => 
                    ( <List author={list.author} name={list.name} category={list.category} likes={list.likes} elements={list.elements}/> )
                    )}
                </div>
            </div>
        )
    }
}

export default SearchPage