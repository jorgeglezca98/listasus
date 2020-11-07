import React from 'react'

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
    onClick?: () => void
}


class List extends React.Component<ListProps> {

    categoryMap : { [key:string]: string } = { 
        "nature": leafIcon, 
        "parenthood": babyIcon,
        "food": foodIcon,
        "travel": travelICon,
        "technology": computerIcon
    }

    stylesMap : { [key:string]: object | undefined } = {
        "extended": extendedListStyles,
        "summarized": undefined
    }

    private onClick: () => void
    private styles: { [key:string]: string }

    constructor(props: ListProps) {
        super(props)

        this.styles = {
            ...summarizedListStyles,
            ...this.stylesMap[props.type ? props.type : "summarized"]
        }

        this.onClick = props.onClick ? props.onClick : () => {}
    }
    
    render() {
        return (
            <div className={ this.styles.cardview + ' ' + this.styles.list} onClick={ this.onClick }>
                <div className={ this.styles.listHead }>
                    <img className={ this.styles.categoryImg } src={ this.categoryMap[this.props.category] } alt="category"/>
                    <p className={ this.styles.authorName }>{ this.props.author }</p>
                </div>
                <hr/>
                <div className={ this.styles.listBody }>
                    <h3 className={ this.styles.listTitle }>{ this.props.name }</h3>
                    <ul className={ this.styles.listElements }>
                         { /* Change key with id */ }
                        { this.props.elements.map((el) => ( <li key={el} className={ this.styles.listElement }>{el}</li> )) }
                    </ul>
                </div>
                <hr/>
                <div className={ this.styles.listFoot }>
                    <p className={ this.styles.likesNumber }>{ this.props.likes }</p>
                    <button className={ this.styles.likesButton }>
                        <img className={ this.styles.likesImg } src={ heart } alt='Like button'></img>
                    </button>
                </div>
            </div>
        )
    }
}

export default List