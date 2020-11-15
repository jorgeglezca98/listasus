import React, { useState, MouseEvent as ReactMouseEvent } from 'react'

import summarizedListStyles from './list.module.css'
import extendedListStyles from './extendedList.module.css'

import heart from '../../assets/img/heart.png'
import leafIcon from '../../assets/img/leaf.png'
import babyIcon from '../../assets/img/baby.png'
import foodIcon from '../../assets/img/food.png'
import travelICon from '../../assets/img/travel.png'
import computerIcon from '../../assets/img/computer.png'


interface ListProps {
    type?: string;
    id: number,
    author: string,
    name: string,
    category: string,
    likes: number,
    elements: Array<string>
    onClick?: (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void
}

const categoryMap : { [key:string]: string } = { 
    "nature": leafIcon, 
    "parenthood": babyIcon,
    "food": foodIcon,
    "travel": travelICon,
    "technology": computerIcon
}

const stylesMap : { [key:string]: object | undefined } = {
    "extended": extendedListStyles,
    "summarized": undefined
}

const List = (props: ListProps) => {
    
    const [styles, ] = useState({
        ...summarizedListStyles,
        ...stylesMap[props.type ? props.type : "summarized"]
    })

    return (
        <div className={ styles.cardview + ' ' + styles.list} onClick={ props.onClick }>
            <div className={ styles.listHead }>
                <img className={ styles.categoryImg } src={ categoryMap[props.category] } alt="category"/>
                <p className={ styles.authorName }>{ props.author }</p>
            </div>
            <hr/>
            <div className={ styles.listBody }>
                <h3 className={ styles.listTitle }>{ props.name }</h3>
                <ul className={ styles.listElements }>
                     { /* Change key with id */ }
                    { props.elements.map((el) => ( <li key={el} className={ styles.listElement }>{el}</li> )) }
                </ul>
            </div>
            <hr/>
            <div className={ styles.listFoot }>
                <p className={ styles.likesNumber }>{ props.likes }</p>
                <button className={ styles.likesButton }>
                    <img className={ styles.likesImg } src={ heart } alt='Like button'></img>
                </button>
            </div>
        </div>
    )
}

export default List