import { ListGroup } from "react-bootstrap"
import IconButton, { Icon } from "../styledComponents/buttons/IconButton"
import { TaskObject } from "../types/objects"
import { Id } from "../types/taskTypes"
import './Tasks.css'


type TaskListProps = {
    tasks: Array<TaskObject>
    handleDeleteTask: (id: Id) => void
}

export default function Tasks(props: TaskListProps) {

    const { tasks, handleDeleteTask } = props




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