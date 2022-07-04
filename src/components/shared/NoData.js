import React from 'react';

const NoData = ({ show }) => {
    return (
        <div className={`${show ? 'flex justify-center items-center w-32 lg:w-72 mx-auto py-10 lg:py-32' : 'hidden'}`}>
            <img src="/empty_notbook.svg" alt='empty' />
        </div>
    );
};

export default NoData;