import React, { RefObject } from 'react'

import styles from './searchBar.module.css'

import lens from '../../assets/img/lens.png'


interface SearchBarProps {
    onSearch?: (searchValue: string) => void
}


class SearchBar extends React.Component<SearchBarProps> {

    private searchInput : React.RefObject<HTMLInputElement>
    private onSearch : (searchValue: string) => void

    constructor(props: SearchBarProps) {
        super(props)

        this.onSearch = props.onSearch ? props.onSearch : () => {}
        this.searchInput = React.createRef()
    }

    componentDidMount() {
        this.searchInput.current && this.searchInput.current.addEventListener("keyup", (event) => {
            if(event.key === 'Enter') {
                event.preventDefault()
                this.search()
            }
        })
    }

    search = () => {
        const searchValue = this.searchInput.current?.value
        if(searchValue) {
            this.onSearch(searchValue)
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