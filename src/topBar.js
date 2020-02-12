import React from 'react';
import './topBar.css';

const topBar = () => {
    return (
        <div className="header">
            <h2 className="logo">TRAVELLER</h2>
            <div className="menu">
                <a href="#">Trips</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <i class="fas fa-search"></i>
            <i class="fas fa-bell"></i>
            <img src="https://i.imgur.com/yZOLcb7.jpg" />
        
        </div>
    )
    
}


export default topBar;