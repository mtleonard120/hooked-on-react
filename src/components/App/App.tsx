import React from 'react'

// packages
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

// components
import {Home, UseStateDemo1, UseEffectDemo} from 'components'

// utils
import {concatStyles as s} from 'utils'

// styles
import styles from './App.module.scss'
import {UseStateDemo2} from 'components/pages/UseStateDemo2'

export function App() {
    return (
        <BrowserRouter>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.navItemList}>
                        <Link to='/' className={s(styles.homeLink, styles.navItem)}>
                            Hooked On React
                        </Link>

                        <Link to='/useStateDemo1' className={styles.navItem}>
                            UseState1
                        </Link>

                        <Link to='/useStateDemo2' className={styles.navItem}>
                            UseState2
                        </Link>

                        <Link to='/useEffectDemo' className={styles.navItem}>
                            UseEffect
                        </Link>
                    </div>
                </div>
            </nav>

            <div className={styles.container}>
                <Switch>
                    <Route path='/useStateDemo1'>
                        <UseStateDemo1 />
                    </Route>

                    <Route path='/useStateDemo2'>
                        <UseStateDemo2 />
                    </Route>

                    <Route path='/useEffectDemo'>
                        <UseEffectDemo userId='123' />
                    </Route>

                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
