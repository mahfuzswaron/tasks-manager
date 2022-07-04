import { useState, CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";


const Spinner = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen  ">
            <SyncLoader color='#34d399' loading={true} size={10} />
        </div>
    );
};

export default Spinner;