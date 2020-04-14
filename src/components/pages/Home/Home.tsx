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
            . The repo for this app can be found{' '}
            <a href='https://github.com/mtleonard120/hooked-on-react' target='_blank' rel='noopener noreferrer'>
                here
            </a>
            .
        </p>

        <p>
            The links in the top nav demonstrate various behaviors of hooks, and each sequentially builds on the page
            before. Pop open your react dev tools and play around with them!
        </p>
    </>
)
