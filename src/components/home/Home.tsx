
import { useState } from "react";
import './Home.css'
import TextButton from "../styledComponents/buttons/TextButton";
import TaskFormModal from "../createTaskForm/taskFormModal";
import Tasks from "../tasks/Tasks";
import NavBar from "../navBar/navBar";





export default function Home() {

    const [showModal, setShowModal] = useState(false);



    const handleShowModal = () => {
        setShowModal(!showModal)

    }
   

    return (
        <div>
            <NavBar/>
            <br/>
            <h1>Welcome</h1>
            <div id="btn">
                <TextButton
                    text="Create new task"
                    onClick={handleShowModal}
                />
            </div>
            <TaskFormModal show={showModal} onHide={handleShowModal} />
            <div className="task-list-container">
                <Tasks/>
            </div>


        </div>
    )
}