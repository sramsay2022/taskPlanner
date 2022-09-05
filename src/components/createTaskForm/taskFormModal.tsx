import React from "react"
import { Modal } from "react-bootstrap"
import TaskForm from "./TaskForm"


interface TaskFormModalProps {
    show: boolean
    onHide: () => void
}

export default function TaskFormModal(props: TaskFormModalProps){

    const { show, onHide } = props

    return (
        <div>
        <Modal show={show} onHide={onHide} size="lg" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TaskForm />
                </Modal.Body>
                
            </Modal>
    </div>
    )
}