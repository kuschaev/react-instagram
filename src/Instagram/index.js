import React from 'react';
import avatar from './assets/images/nasa.jpg';
import './styles/init.css';

export const Instagram = () => {
    return (
        <>
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
            <section className = 'content'>
                <div className = 'profile'>
                    <img
                        className = 'avatar'
                        src = { avatar }
                    />
                    <div className = 'main'>
                        <span className = 'nickname'>nasa</span>
                    </div>
                </div>
            </section>
        </>
    );
};
