import React from 'react'
import styles from './homePage.module.css'
import List from '../../infrastructure/list/list'
import SearchBar from '../../shared/infrastructure/searchBar'

import internetSEarch from '../../assets/img/internet-search.svg'
import doubt from '../../assets/img/doubt.svg'
import listImg from '../../assets/img/list.svg'
import giveKnowledge from '../../assets/img/give-knowledge.svg'


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div className={ styles.search }>
                    <div className={ styles.fadeOut }>
                        <div>
                            <h1 className={ styles.webName }>Listasus</h1>
                            <p>Organiza. Comparte. Lista.</p>
                            <div className={ styles.searchBarContainer }>
                                <SearchBar/>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={ styles.aboutUs}>
                    <div>
                        <div>
                            <svg width="100px" height="100px" viewBox="0 0 100 100">
                                <image width="100px" height="100px" href={internetSEarch}></image>
                            </svg>
                            <p>¿Te vas de viaje a África y no sabes todas las cosas que deberías preparar?</p>
                        </div>
                        <div>
                            <svg width="100px" height="100px" viewBox="0 0 100 100">
                                <image width="100px" height="100px" href={doubt}></image>
                            </svg>
                            <p>¿Tienes la sensación de que te falta hacer o coger algo constantemente?</p>
                        </div>
                        <div>
                            <svg width="100px" height="100px" viewBox="0 0 100 100">
                                <image width="100px" height="100px" href={listImg}></image>
                            </svg>
                            <p>Las listas ayudan pero ¿y si cuando la haces no tienes algo en cuenta?</p>
                        </div>
                        <div>
                            <svg width="100px" height="100px" viewBox="0 0 100 100">
                                <image width="100px" height="100px" href={giveKnowledge}></image>
                            </svg>
                            <p>Aquí harás uso de la experiencia de otros para no volver a olvidar nada.</p>
                        </div>
                    </div>
                </section>
                <div className={ styles.divider + ' ' + styles.divTransparent + ' ' + styles.divArrowDown}></div>
                <div className={ styles.popular}>
                    <h2>Popular lists</h2>
                    <div className={ styles.lists}>
                        <List author="Jorge" name="Animales" category="nature" likes={12352} elements={ ["perro", "gato", "elefante", "tigre", "boa"] }/>
                        <List author="Jorge" name="Animales" category="nature" likes={12352} elements={ ["perro", "gato", "elefante", "tigre", "boa"] }/>
                        <List author="Jorge" name="Animales" category="nature" likes={12352} elements={ ["perro", "gato", "elefante", "tigre", "boa"] }/>
                        <List author="Jorge" name="Animales" category="nature" likes={12352} elements={ ["perro", "gato", "elefante", "tigre", "boa"] }/>
                        <List author="Jorge" name="Animales" category="nature" likes={12352} elements={ ["perro", "gato", "elefante", "tigre", "boa"] }/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage