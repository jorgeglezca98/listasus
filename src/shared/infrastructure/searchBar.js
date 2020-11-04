import React from 'react'

import styles from './searchBar.module.css'

import lens from '../../assets/img/lens.png'


class SearchBar extends React.Component {

    searchInput = React.createRef()

    constructor(props) {
        super(props)

        if(!props.onSearch) {
            props.onSearch = () => {}
        }
    }

    componentDidMount() {
        this.searchInput.current.addEventListener("keyup", (event) => {
            if(event.keyCode === 13) {
                event.preventDefault()
                this.search()
            }
        })
    }

    search = () => {
        const searchValue = this.searchInput.current.value
        if(searchValue) {
            this.props.onSearch(searchValue)
        }
    }

    render() {
        return (
            <div className={ styles.searchBar }>
                <input ref={ this.searchInput } placeholder="¿De qué va la lista que necesitas?"></input>
                <button onClick= { () => this.search() }>
                    <img src={lens} alt='Search button'></img>
                </button>
            </div>
        )
    }
}

export default SearchBar