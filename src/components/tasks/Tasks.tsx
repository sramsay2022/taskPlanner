import { ListGroup } from "react-bootstrap"
import IconButton, { Icon } from "../styledComponents/buttons/IconButton"
import { Id } from "../types/taskTypes"
import './Tasks.css'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getTasks } from "../createTaskForm/TaskFormSelectors";
import { deleteTask } from "../createTaskForm/TaskFormSlice";
import React from "react";


export default function Tasks() {

    const tasks = useAppSelector(getTasks)
    const dispatch = useAppDispatch()

    const handleDeleteTask = (id: Id) => {
        console.log(id)
        dispatch(deleteTask(id))
    }
    const handleClick=(event: React.ChangeEvent<HTMLInputElement>)=>{
        return (<div>

        </div>
        )
    }

    return (
        <div>
            <h2 id="title">Tasks</h2>
            <div className="list-tasks">
                <ListGroup>
                    {tasks.map(({ id, name }) => {
                        return (
                            <ListGroup.Item key={id}>
                                    {name}
                                <div className="deleteButtonWrapper">
                                    <IconButton
                                        icon={Icon.CROSS}
                                        onClick={() => handleDeleteTask(id)}
                                    />
                                </div>
                            </ListGroup.Item>
                        )
                    }
                    )}
                </ListGroup>
            </div>
        </div>
    )
}