import React, { useState } from 'react';

const Task = ({ task, defaultTask }) => {
    const { text } = task;
    const [taskText, setTaskText] = useState(text);
    const submit = () => {
        if (taskText === "") return alert('this field cannot be empty')
        fetch("https://tasks-manager-2.herokuapp.com/addoredit", {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                id: task._id
            },
            body: JSON.stringify({ text: taskText })
        })
            .then(res => res.json())
            .then(data => console.log(data));
        defaultTask && setTaskText("")
    }
    const handleChange = (e) => {
        const editedText = e.target.value;
        setTaskText(editedText)
        // console.log(e);
        if (e.type === "keyup" && e.key === "Enter") {
            submit();
        }
    }
    const handleComplete = () => {
        fetch(`https://tasks-manager-2.herokuapp.com/complete`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                id: task._id
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <li className='flex space-x-4 lg:space-x-8 items-center my-3'>
            <input type="radio" name="task" className={defaultTask ? 'opacity-0 mr-3' : "radio radio-primary"} onClick={handleComplete} />
            <div class="tooltip w-full" data-tip="click to edit and press 'Enter' to submit">
                <input type="text" onChange={handleChange} onKeyUp={handleChange} value={taskText} class="input  w-full " />
            </div>
        </li>
    );
};

export default Task;