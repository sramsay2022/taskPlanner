
import { useState } from "react";

import TextButton from "../styledComponents/buttons/TextButton";
import TaskFormModal from "../createTaskForm/taskFormModal";



export default function Home() {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal) 
        console.log("handleShowModal is called")
    }

    return (
        <div>
            <TextButton 
            text="Create new task"
            onClick={handleShowModal}/>
            <TaskFormModal show={showModal} onHide={handleShowModal}/>
            

        </div>
    )
}