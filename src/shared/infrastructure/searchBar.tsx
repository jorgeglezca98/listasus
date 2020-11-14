import React, { useRef } from 'react'

import styles from './searchBar.module.css'

import lens from '../../assets/img/lens.png'


interface SearchBarProps {
    onSearch?: (searchValue: string) => void
}


const SearchBar = (props: SearchBarProps) => {
    const searchInput = useRef<HTMLInputElement>(null)
    const onSearch : (searchValue: string) => void = props.onSearch ? props.onSearch : () => {}

    const search = () => {
        const searchValue = searchInput.current?.value
        if(searchValue) {
            onSearch(searchValue)
        }
    }

    React.useEffect(() => {
        searchInput.current && searchInput.current.addEventListener("keyup", (event) => {
            if(event.key === 'Enter') {
                event.preventDefault()
                search()
            }
        })
    }, [])

    return (
        <div className={ styles.searchBar }>
            <input ref={ searchInput } placeholder="¿De qué va la lista que necesitas?"></input>
            <button onClick= { () => search() }>
                <img src={lens} alt='Search button'></img>
            </button>
        </div>
    )
}

export default SearchBar