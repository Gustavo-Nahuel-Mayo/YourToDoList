import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';



function TaskCard({task}) {

    const { deleteTask} = useContext(TaskContext);

    return(
        <div className='container-card'>
            <div className="card">
                <h1 className="" id='h1'>{task.title}</h1>
                <p className='' id='p'> {task.description}</p>
                <input type= "checkbox" id='check'/><label id='label'>Done</label>
                <button id='button'
                className='' 
                onClick={() => deleteTask(task.id)}>
                    Remove task
                </button>
            </div>

        </div>


        

    );
}

export default TaskCard;