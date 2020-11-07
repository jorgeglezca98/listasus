import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import HomePage from './pages/home/homePage'
import SearchPage from './pages/search/searchPage'
import FullListPage from './pages/fullList/fullList'

import styles from './App.module.css'

import logoIcon from './assets/img/logo.png'
import userIcon from './assets/img/user.png'


class App extends React.Component {
     
    render() {
         return (
            <BrowserRouter>
                <nav>
                    <Link to="/" className={styles.logoButton}>
                        <img className={styles.logo} src={logoIcon} alt='App icon'></img>
                    </Link>
                    <img className={styles.userIcon} src={userIcon} alt="User icon"></img>
                    <div className={styles.cardview + ' ' + styles.userWindow}>
                        <img className={styles.userWindowIcon} src={userIcon} alt="User icon"></img>
                        <Link to="/">Mis listas</Link>
                        <Link to="/">Listas guardadas</Link>
                        <hr />
                        <Link to="/">Cerrar sesión</Link>
                    </div>
                </nav>
                <div className={styles.content}>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/search" component={SearchPage}/>
                    <Route path="/search/:id" component={FullListPage}/>
                </div>
                <footer>
                    <ul>
                        <li><Link to="/">Sobre nosotros</Link></li>
                        <li><Link to="/">Contacto</Link></li>
                        <li><Link to="/">Descargar app</Link></li>
                    </ul>
                </footer>
            </BrowserRouter>
        )
    }
}

export default App
