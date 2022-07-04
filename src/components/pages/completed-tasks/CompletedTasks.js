import React, { useEffect, useState } from 'react';
import NoData from '../../shared/NoData';
import Spinner from '../../shared/Spinner';

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [show, setShow] = useState(false)
    useEffect(() => {
        fetch("https://tasks-manager-2.herokuapp.com/alltasks")
            .then(res => res.json())
            .then(data => {
                const filteredTasks = data.filter(d => d.status === 'completed');
                if (!filteredTasks || !filteredTasks.length) {
                    setShow(true)
                }
                else {
                    setShow(false)
                }
                setCompletedTasks(filteredTasks)
            })
    }, [completedTasks]);


    return (
        <div className='p-5 lg:p-20'>
            <h3 className='text-center text-3xl text-primary font-bold'>Completed Tasks</h3>
            <div className='my-10 w-full lg:w-2/3 mx-auto'>
                <ul>
                    {
                        completedTasks.map(c => <li key={c._id} className='flex lg:space-x-8 my-3 p-3 rounded-lg bg-base-100 '>{c.text} </li>)

                    }
                </ul>
                <NoData show={show} />
                {/* {
                    show && <Spinner />
                } */}
            </div>
        </div>
    );
};

export default CompletedTasks;