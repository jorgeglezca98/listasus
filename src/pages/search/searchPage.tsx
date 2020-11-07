import React from 'react'
import List from '../../infrastructure/list/list'
import ListEntity from '../../domain/list/entity/list'
import SearchBar from '../../shared/infrastructure/searchBar'
import { RouteComponentProps } from 'react-router-dom'

import styles from './searchPage.module.css'


interface SearchPageProps extends RouteComponentProps {
    search?: string
}


class SearchPage extends React.Component<SearchPageProps> {

    state: { searchResults: Array<ListEntity> }

    constructor (props: SearchPageProps) {
        super(props)
        if(props.search) {
             // search results and save them
             this.state = { searchResults: [] }
        } else {
            this.state = {
                searchResults : Array(20).fill(
                    new ListEntity(1, "Jorge", "Piezas de ordenador", "technology", 123432, ["Placa base", "RAM", "Procesador", "Gráfica"] )
                )
            }
        }
    }

    searchResults = (search: string) => { }

    showExtendedList = (list: ListEntity) => {
        this.props.history.push({
            pathname: `/search/${list.getId}`,
            state: { list }
        })
    }

    render () {
        return (
            <div className={styles.searchResults}>
                <div className={ styles.searchBarContainer }>
                    <SearchBar onSearch={ this.searchResults }/>
                </div>
                <p>{this.state.searchResults.length === 0 ? "No lists found" : `${this.state.searchResults.length} results` }</p>
                <div className={styles.listsContainer}>
                    { this.state.searchResults.map((list: ListEntity) => 
                    ( <List id={list.getId} author={list.getAuthor} name={list.getName} category={list.getCategory} likes={list.getLikes} elements={list.getElements} onClick={ () => this.showExtendedList(list) }/> )
                    )}
                </div>
            </div>
        )
    }
}

export default SearchPage