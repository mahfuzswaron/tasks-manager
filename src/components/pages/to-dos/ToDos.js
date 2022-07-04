import React, { useEffect, useState } from 'react';
import NoData from '../../shared/NoData';
import Spinner from '../../shared/Spinner';
import Task from './Task';

const ToDos = () => {

    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false)


    useEffect(() => {
        fetch("https://tasks-manager-2.herokuapp.com/alltasks")
            .then(res => res.json())
            .then(data => {
                const filteredTasks = data.filter(d => d.status !== 'completed');
                if (!filteredTasks || !filteredTasks.length) {
                    setShow(true)
                }
                else {
                    setShow(false)
                }
                setTasks(filteredTasks)
            })
    }, [tasks]);

    // if (!tasks || !tasks.length) return setShow(true)

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
                <NoData show={show} />
            </div>
        </div>
    );
};

export default ToDos;