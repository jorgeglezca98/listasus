import React from 'react'
import List from '../../infrastructure/list/list'

import styles from './fullList.module.css'


class FullListPage extends React.Component {

    render() {
        return (
            <div className={ styles.listBackground }>
                <div className={ styles.listContainer }>
                    <List 
                        type="extended"
                        author="Jorge" 
                        name="Animales" 
                        category="nature" 
                        likes={12352} 
                        elements={ ["perro", "gato", "elefante", "tigre", "boa"] }
                    />
                </div>
            </div>
        )
    }
}

export default FullListPage