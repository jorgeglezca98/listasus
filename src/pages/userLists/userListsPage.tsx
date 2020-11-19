import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ConfigContext from '../../shared/configContext'
import styles from './userListsPage.module.css'
import ListEntity from '../../domain/list/entity/list'
import List from '../../infrastructure/list/list'


const UserListsPage = (props: RouteComponentProps) => {
    const { listRepository } = useContext(ConfigContext)
    const searchResults = listRepository.findByName("ord")

    return (
        <div>
            <button className={styles.sectionButton}>Listas originales</button>
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
                /> )
                )}
            </div>
            <button className={styles.sectionButton}>Listas personalizadas</button>
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
                /> )
                )}
            </div>
            <button className={styles.sectionButton}>Listas guardadas</button>
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
                /> )
                )}
            </div>
        </div>
    )
}

export default UserListsPage