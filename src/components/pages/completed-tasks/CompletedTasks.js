import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/alltasks")
            .then(res => res.json())
            .then(data => {
                setCompletedTasks(data.filter(d => d.status === 'completed'))
            })
    }, [])
    return (
        <div className='p-5 lg:p-20'>
            <h3 className='text-center text-3xl text-primary font-bold'>Completed Tasks</h3>
            <div className='my-10 w-full lg:w-2/3 mx-auto'>
                <ul>
                    {
                        completedTasks.map(c => <li key={c._id} className='flex lg:space-x-8 my-3 p-3 rounded-lg bg-base-100 '>{c.text} </li>)

                    }
                </ul>
            </div>
        </div>
    );
};

export default CompletedTasks;