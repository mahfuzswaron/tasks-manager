import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CalendarCompo = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='p-5 lg:p-20'>
            <h3 className='text-center text-3xl text-primary font-bold'>Calendar</h3>
            <div className='flex justify-center my-5'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default CalendarCompo;