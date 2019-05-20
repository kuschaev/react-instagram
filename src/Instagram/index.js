import React from 'react';
import './styles/init.css';

export const Instagram = () => {
    return (
        <section className = 'header'>
            <div className = 'logo' />
            <input
                placeholder = 'Search'
                type = 'text'
            />
            <div className = 'nav'>
                <div className = 'explore' />
                <div className = 'likes' />
                <div className = 'settings' />
            </div>
        </section>
    );
};
