import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import {App} from './components'

// register modal root
import Modal from 'react-modal'
Modal.setAppElement('#root')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
