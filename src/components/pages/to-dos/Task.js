import React, { useState } from 'react';

const Task = ({ task }) => {
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
    }
    const handleChange = (e) => {
        const editedText = e.target.value;
        setTaskText(editedText)
        // console.log(e);
        if (e.type === "keyup" && e.key === "Enter") {
            submit();
        }
    }
    return (
        <li className='flex space-x-4 lg:space-x-8 items-center my-3'>
            <input type="radio" name="task" class="radio radio-primary" />
            <input type="text" onChange={handleChange} onKeyUp={handleChange} onBlur={submit} value={taskText} class="input  w-full " />
        </li>
    );
};

export default Task;