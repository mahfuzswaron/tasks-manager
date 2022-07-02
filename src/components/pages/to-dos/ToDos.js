import React, { useEffect, useState } from 'react';
import Task from './Task';

const ToDos = () => {

    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        fetch("https://tasks-manager-2.herokuapp.com/alltasks")
            .then(res => res.json())
            .then(data => {
                setTasks(data.filter(d => d.status !== 'completed'))
            })
    }, [tasks])

    return (
        <div className='p-5 lg:p-20 '>
            <h3 className='text-center text-3xl text-primary font-bold'>Today's Tasks</h3>
            <div className='my-10 w-full lg:w-2/3 mx-auto'>
                <ul>
                    {<Task
                        key="defaultTask"
                        defaultTask
                        task={{ _id: JSON.stringify(Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))), text: "task text here" }}
                    />
                    }
                    {tasks.map((task) => <Task
                        key={task._id}
                        task={task}
                    />)

                    }
                </ul>
            </div>
        </div>
    );
};

export default ToDos;