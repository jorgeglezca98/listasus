import React from 'react'

import styles from './searchBar.module.css'

import lens from '../../assets/img/lens.png'


class SearchBar extends React.Component {

    render() {
        return (
            <div className={ styles.searchBar }>
                <input placeholder="¿De qué va la lista que necesitas?"></input>
                <img src={lens} alt='Search button'></img>
            </div>
        )
    }
}

export default SearchBar