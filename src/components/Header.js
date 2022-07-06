import React, { useState } from 'react'
import Windowsize from './Windowsize.js'

export default function Header() {
    const { width } = Windowsize();

    
    
    return (
        <>
        <div id='heading'>
            <h2>Application name</h2>
            <ul>
                {width > 768 && (<li><form id='searchform'>
                                        <input className='searchinput' placeholder='Search' ></input>
                                        <button className='searchbtn fa fa-search'></button>
                                </form></li>)}
                <li><a href='/'><i className='fa fa-bars'></i></a></li>
            </ul>
            
        </div>

        <div>
            {width < 769 && (
                <form id='searchform'>
                    <input className='searchinput' placeholder='Search' ></input>
                    <button className='searchbtn'>Search</button>
                </form>  
            )}
        </div>
        
        <div id='nav'>
            <ul>
                <li><a href='/'>&times;</a></li>
                <li><a href='/'>Search</a></li>
                <li><a href='/'>Profile</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </div>

        

        </>
    );
}