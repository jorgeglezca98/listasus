import React from 'react'
import List from '../../infrastructure/list/list'

import styles from './fullList.module.css'


class FullListPage extends React.Component {

    constructor(props) {
        super(props)

        if(!props.location.state || !props.location.state.list) {
            // search data by id and update the list attributes
        } else {
            this.list = props.location.state.list
        }
    }

    render() {
        return (
            <div className={ styles.listBackground } onClick={ () => this.props.history.replace("/search") }>
                <div className={ styles.listContainer } onClick={ (event) => { event.stopPropagation() } }>
                <List 
                    type="extended"
                    author={ this.list.author } 
                    name={ this.list.name } 
                    category={ this.list.category } 
                    likes={ this.list.likes } 
                    elements={ this.list.elements }
                />
                </div>
            </div>
        )
    }
}

export default FullListPage