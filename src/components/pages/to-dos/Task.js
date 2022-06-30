import React, { useState } from 'react';

const Task = ({ task }) => {
    const { text } = task;
    const [taskText, setTaskText] = useState(text);
    const submit = () => {
        console.log(taskText)
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
        <li className='flex space-x-4 lg:space-x-8 items-center'>
            <input type="radio" name="task" class="radio radio-primary" />
            <input type="text" onChange={handleChange} onKeyUp={handleChange} onBlur={submit} value={taskText} class="input  w-full " />
        </li>
    );
};

export default Task;