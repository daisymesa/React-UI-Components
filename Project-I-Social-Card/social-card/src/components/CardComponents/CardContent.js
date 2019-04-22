import React from 'react';
import './Card.css';

const CardContent = () => {
    return (

        <div className = "card-wrapper">
        <div className = "card-content-title">
        
        <h2>
            Get started with React
        </h2>
        
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>

        <div className = "card-content-source">
        <p>reactjs.org</p>
        </div>

        </div>

        </div>

    );
};

export default CardContent;