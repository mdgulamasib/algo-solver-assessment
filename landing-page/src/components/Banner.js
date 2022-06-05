import React from 'react';
import bgimg from '../images/xxx.gif'

const Banner = () => {
    return (
        <div class="hero " style={{ "backgroundImage": `url(${bgimg})` }}>
            <div class="hero-overlay bg-opacity-10"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
                    <p class="mb-5">This is a demo side, build for assessment purpose only! Buttons is functional. We are using DaisyUI today!!!</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;