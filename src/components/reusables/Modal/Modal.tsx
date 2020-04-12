import React from 'react'

// packages
import ReactModal from 'react-modal'

// components
import {Button} from 'components'

// styles
import styles from './Modal.module.scss'

// types
export interface IModalProps {
    isOpen: boolean
    ariaLabel?: string
    closeModal?: () => void // Omit this prop to make modal non-closable
}

// primary component
export const Modal: React.FC<IModalProps> = ({isOpen, closeModal, ariaLabel, children}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            contentLabel={ariaLabel}
            className={styles.modal}
            overlayClassName={styles.overlay}
            shouldCloseOnEsc={!!closeModal}
            shouldCloseOnOverlayClick={!!closeModal}
            onRequestClose={closeModal}
        >
            <div className={styles.content}>
                {/* Can also close modal via overlay click or esc if closeModal prop exists */}
                {!!closeModal && (
                    <Button displayAsLink className={styles.cancelButton} onClick={closeModal}>
                        x
                    </Button>
                )}
                {children}
            </div>
        </ReactModal>
    )
}
