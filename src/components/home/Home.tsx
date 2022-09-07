
import { useState } from "react";
import './Home.css'
import TextButton from "../styledComponents/buttons/TextButton";
import TaskFormModal from "../createTaskForm/taskFormModal";
import Tasks from "../tasks/Tasks";





export default function Home() {

    const [showModal, setShowModal] = useState(false);



    const handleShowModal = () => {
        setShowModal(!showModal)

    }
   

    return (
        <div>
            <div id="btn">
                <TextButton
                    text="Create new task"
                    onClick={handleShowModal}
                />
            </div>
            <TaskFormModal show={showModal} onHide={handleShowModal} />
            <div>
                <Tasks/>
            </div>


        </div>
    )
}