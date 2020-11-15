import React, { useContext } from 'react'
import List from '../../infrastructure/list/list'
import ListEntity from '../../domain/list/entity/list'
import SearchBar from '../../shared/infrastructure/searchBar'
import { RouteComponentProps } from 'react-router-dom'

import styles from './searchPage.module.css'
import ConfigContext from '../../shared/configContext'


interface SearchPageProps extends RouteComponentProps {
    search?: string
}


const SearchPage = (props: SearchPageProps) => {
    /* Context */

    const { listRepository } = useContext(ConfigContext)

    /* State */

    const urlSearchValue = (new URLSearchParams(props.location.search)).get('search')
    const [ searchResults, changeSearchResults ] = React.useState<Array<ListEntity>>(
        urlSearchValue ?
        listRepository.findByName(urlSearchValue) : 
        []
    )

    /* Methods */

    const searchForResults = (search: string) => { 
        changeSearchResults(listRepository.findByName(search))
    }

    const showExtendedList = (list: ListEntity) => {
        props.history.replace({
            pathname: `/search/${list.getId}`,
            state: { list }
        })
    }

    /* Render */

    return (
        <div className={styles.searchResults}>
            <div className={ styles.searchBarContainer }>
                <SearchBar onSearch={ searchForResults } value={ urlSearchValue ? urlSearchValue : undefined }/>
            </div>
            <p>{ searchResults.length === 0 ? "No lists found" : `${searchResults.length} results` }</p>
            <div className={styles.listsContainer}>
                { searchResults.map((list: ListEntity) => 
                ( <List 
                    key={list.getId}
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