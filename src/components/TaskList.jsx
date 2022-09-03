import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext'


function TaskList() {

    const {tasks} = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1 id='no-tarea' className='text-center text-white font-serif text-3xl uppercase'> All task are done </h1>
    }
    return (
        <div id='gran-container'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />

            ))}
        </div>
    );
}

export default TaskList;