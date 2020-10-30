import React from 'react'
import styles from './list.module.css'

import heart from '../../assets/img/heart.png'
import leafIcon from '../../assets/img/leaf.png'
import babyIcon from '../../assets/img/baby.png'
import foodIcon from '../../assets/img/food.png'
import travelICon from '../../assets/img/travel.png'
import computerIcon from '../../assets/img/computer.png'

class List extends React.Component {

    categoryMap = { 
        "nature": leafIcon, 
        "parenthood": babyIcon,
        "food": foodIcon,
        "travel": travelICon,
        "technology": computerIcon
    }
    
    render() {
        return (
            <div className={ styles.cardview + ' ' + styles.list}>
                <div className={ styles.listHead }>
                    <img src={ this.categoryMap[this.props.category] } alt="category"/>
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