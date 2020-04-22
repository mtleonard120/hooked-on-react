import React from 'react'

// packages
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

// components
import {
    Home,
    UseStateDemo1,
    UseStateDemo2,
    UseEffectDemo,
    UseReducerDemo,
    UseContextDemo,
    UseMemoDemo,
    UseCustomDemo,
} from 'components'

// constants
import { userGreg } from 'constant'

// utils
import {concatStyles as s} from 'utils'

// styles
import styles from './App.module.scss'

// types
import { IRawUser } from 'types'

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

                        <Link to='/useReducerDemo' className={styles.navItem}>
                            UseReducer
                        </Link>

                        <Link to='/useContextDemo' className={styles.navItem}>
                            UseContext
                        </Link>

                        <Link to='/useMemoDemo' className={styles.navItem}>
                            UseMemo
                        </Link>

                        <Link to='/useCustomDemo' className={styles.navItem}>
                            Custom Hook
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
                        <UseStateDemo2 rawUser={userGreg as IRawUser}/>
                    </Route>

                    <Route path='/useEffectDemo'>
                        <UseEffectDemo userId='123' />
                    </Route>

                    <Route path='/useReducerDemo'>
                        <UseReducerDemo userId='123' />
                    </Route>

                    <Route path='/useContextDemo'>
                        <UseContextDemo userId='123' />
                    </Route>

                    <Route path='/useMemoDemo'>
                        <UseMemoDemo />
                    </Route>

                    <Route path='/useCustomDemo'>
                        <UseCustomDemo />
                    </Route>

                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
