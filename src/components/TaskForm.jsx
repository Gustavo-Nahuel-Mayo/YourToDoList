import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext'


function TaskForm({ tasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask }= useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description)
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')
       /* const newTask = {
            title,
            id: 
            description
        }*/
        /*createTask(newTask)*/
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="p-10 mb-4">
                <h1 className='text-2xl font-serif mb-3 uppercase' id='title-form'>Create your Task</h1>
                <input
                placeholder='Your Task' id='placeholder'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                className='bg-slate-300 p-3 w-full mb-2'
                />
                <textarea placeholder='Description' id='placeholder'
                onChange={(e) => setDescription(e.target.value)}
                value={description} className='bg-slate-300 p-3 w-full mb-2'>
                </textarea>
                <button className='bg-green-700 rounded-lg px-3 py-1' id='button-form'>Save your Task</button>
            </form>

        </div>

    );

}

export default TaskForm;
