
import { useState } from "react";
import './Home.css'
import TextButton from "../styledComponents/buttons/TextButton";
import TaskFormModal from "../createTaskForm/taskFormModal";
import Tasks from "../tasks/Tasks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getTasks } from "../createTaskForm/TaskFormSelectors";
import { deleteTask } from "../createTaskForm/TaskFormSlice";
import { Id } from "../types/taskTypes";



export default function Home() {

    const [showModal, setShowModal] = useState(false);
    const tasks = useAppSelector(getTasks)
    const dispatch = useAppDispatch()



    const handleShowModal = () => {
        setShowModal(!showModal)
        console.log("handleShowModal is called")
    }
    const handleDeleteTask = (id: Id) => {
        dispatch(deleteTask(id))
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
                <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} />
            </div>


        </div>
    )
}