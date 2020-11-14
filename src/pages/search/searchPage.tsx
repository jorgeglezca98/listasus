import React from 'react'
import List from '../../infrastructure/list/list'
import ListEntity from '../../domain/list/entity/list'
import SearchBar from '../../shared/infrastructure/searchBar'
import { RouteComponentProps } from 'react-router-dom'

import styles from './searchPage.module.css'


interface SearchPageProps extends RouteComponentProps {
    search?: string
}


const SearchPage = (props: SearchPageProps) => {
    /* State */
    let initialResults : Array<ListEntity>
    if(props.search) {
        // search results and save them
        initialResults = []
    } else {
        initialResults = Array(20).fill(
            new ListEntity(1, "Jorge", "Piezas de ordenador", "technology", 123432, ["Placa base", "RAM", "Procesador", "Gráfica"] )
        )
    }
    const [ searchResults, changeSearchResults ] = React.useState<Array<ListEntity>>(initialResults)

    /* Methods */

    const searchForResults = (search: string) => { }

    const showExtendedList = (list: ListEntity) => {
        props.history.push({
            pathname: `/search/${list.getId}`,
            state: { list }
        })
    }

    /* Render */

    return (
        <div className={styles.searchResults}>
            <div className={ styles.searchBarContainer }>
                <SearchBar onSearch={ searchForResults }/>
            </div>
            <p>{ searchResults.length === 0 ? "No lists found" : `${searchResults.length} results` }</p>
            <div className={styles.listsContainer}>
                { searchResults.map((list: ListEntity) => 
                ( <List 
                    id={list.getId} 
                    author={list.getAuthor} 
                    name={list.getName} 
                    category={list.getCategory} 
                    likes={list.getLikes} 
                    elements={list.getElements} 
                    onClick={ () => showExtendedList(list) }
                /> )
                )}
            </div>
        </div>
    )
}

export default SearchPage