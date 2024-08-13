
import React from 'react';
import './AppBar.css';

const MyAppBar: React.FC = () => {
    return (
        <nav style={{
            backgroundColor: "#ffee93",
            color: 'black',
            width: "100%",
            height: '50px',
            padding: '10px',
            fontSize: 'bold',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            position: "sticky",
            top: "0",
            zIndex: "1000"
        }}>
            <p className='p'>Kedai Ale</p>
        </nav>
    );
};



export default MyAppBar;
