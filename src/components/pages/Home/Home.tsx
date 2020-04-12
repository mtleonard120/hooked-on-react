import React from 'react'

// packages

// hooks

// components

// styles
// import styles from './Home.module.scss'

// utils

// types
export interface IHomeProps {}

// primary component
export const Home: React.FC<IHomeProps> = props => {
    return (
        <>
            <h1>Hooked on React</h1>
            <p>This app is a companion to my Hooked on React presentation found ***INSERT LINK HERE***</p>
        </>
    )
}
