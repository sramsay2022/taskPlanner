import React from "react"
import { Modal } from "react-bootstrap"
import TaskForm from "./TaskForm"


 interface TaskFormModalProps {
    show: boolean
    onHide: () => void
}

export default function TaskFormModal(props: TaskFormModalProps){

    const { show, onHide } = props
    
    const handleSubmit = () =>{
        onHide()
    }
    return (
        <div>
        <Modal show={show} onHide={onHide} size="lg" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body onSubmit={handleSubmit}>
                    <TaskForm onHide={onHide}/>
                </Modal.Body>
                
            </Modal>
    </div>
    )
}