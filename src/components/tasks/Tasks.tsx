import { ListGroup } from "react-bootstrap"
import IconButton, { Icon } from "../styledComponents/buttons/IconButton"
import { Id } from "../types/taskTypes"
import './Tasks.css'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getTasks } from "../createTaskForm/TaskFormSelectors";
import { deleteTask } from "../createTaskForm/TaskFormSlice";


export default function Tasks() {

    const tasks = useAppSelector(getTasks)
    const dispatch = useAppDispatch()

    const handleDeleteTask = (id: Id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <ListGroup className="list-tasks">
                {tasks.map(({ id }) => {
                    return (
                        <ListGroup.Item key={id}>
                            {id}
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
    )
}