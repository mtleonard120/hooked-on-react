import React from 'react'

// styles
import styles from './Button.module.scss'

// utils
import {concatStyles as s} from 'utils'

// types
export interface IButtonProps {
    className?: string
    disabled?: boolean
    displayAsLink?: boolean
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<IButtonProps> = ({
    children,
    className,
    disabled,
    displayAsLink,
    type = 'button',
    ...rest
}) =>  (
            <button
                className={s(styles.button, displayAsLink && styles.link, className)}
                disabled={disabled}
                type={type}
                {...rest}
            >
                {children}
            </button>
        )

