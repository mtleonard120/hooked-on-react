import React from 'react'

// packages
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

// components
import {Home, UseStateDemo} from 'components'

// utils
import {concatStyles as s} from 'utils'

// styles
import styles from './App.module.scss'

export function App() {
    return (
        <BrowserRouter>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.navItemList}>
                        <Link to='/' className={s(styles.homeLink, styles.navItem)}>
                            Hooked On React
                        </Link>

                        <Link to='/useStateDemo' className={styles.navItem}>
                            UseState
                        </Link>
                    </div>
                </div>
            </nav>

            <div className={styles.container}>
                <Switch>
                    <Route path='/useStateDemo'>
                        <UseStateDemo />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
