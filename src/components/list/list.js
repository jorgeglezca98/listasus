import React from 'react'
import styles from './list.module.css'

import heart from '../../resources/img/heart.png'
import leaf from '../../resources/img/leaf.png'

class List extends React.Component {
    
    render() {
        return (
            <div className={ styles.cardview + ' ' + styles.list}>
                <div className={ styles.listHead }>
                    <img src={ leaf } alt="category"/>
                    <p>{ this.props.author }</p>
                </div>
                <hr/>
                <div className={ styles.listBody }>
                    <h3>{ this.props.name }</h3>
                    <ul>
                         { /* Change key with id */ }
                        { this.props.elements.map((el) => ( <li key={el}>{el}</li> )) }
                    </ul>
                </div>
                <hr/>
                <div className={ styles.listFoot }>
                    <p>{ this.props.likes }</p>
                    <button><img src={ heart } alt='Like button'></img></button>
                </div>
            </div>
        )
    }
}

export default List