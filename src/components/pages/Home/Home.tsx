import React from 'react'

// types
export interface IHomeProps {}

// primary component
export const Home: React.FC<IHomeProps> = props => (
    <>
        <h1>Hooked on React</h1>
        <p>
            This app is a companion to my Hooked on React presentation found{' '}
            <a
                href='https://docs.google.com/presentation/d/1Hhs20BZf844ebt7yFC9aSor2gOWUS7WTUJxhT2DTRsE/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
            >
                here
            </a>
            . The links in the top nav demonstrate various behaviors of hooks. Pop open your react dev tools and play
            around with them!
        </p>
    </>
)
