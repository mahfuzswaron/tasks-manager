import React, { useState } from 'react';

const Task = ({ task, defaultTask }) => {
    const { text } = task;
    const [taskText, setTaskText] = useState(text);
    const submit = () => {
        fetch("http://localhost:5000/addoredit", {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                id: task._id
            },
            body: JSON.stringify({ text: taskText })
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setTaskText("")
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
        fetch(`http://localhost:5000/complete`, {
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
            <input type="text" onChange={handleChange} onKeyUp={handleChange} onBlur={submit} value={taskText} class="input  w-full " />
        </li>
    );
};

export default Task;