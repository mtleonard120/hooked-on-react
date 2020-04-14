import React from 'react'

// constants
import {initialState} from '.'

// types
import {IUseContextDemoState, IAction} from '.'

export interface IDemoContext {
    context: IUseContextDemoState
    dispatch: React.Dispatch<IAction>
}

// Default Values - these are generally only used for testing.
//
// If a component references this context but does not have a provider
// above it in the tree, these are the values it will receive.
const context: IUseContextDemoState = initialState
const dispatch: React.Dispatch<IAction> = (action: IAction) => {
    return
}

// created context
export const DemoContext = React.createContext<IDemoContext>({context, dispatch})
