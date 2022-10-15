import React from 'react'
import './components.css';
function MainComponent() {
  return (
    <div className='mainDiv'>
        <ul className='mainNav'>
        <li><a href="#">HOME/</a></li>
        <li><a href="#">GUIDES/</a></li>
        </ul>
        <div className='mainContent'>
            <h1>A Complete Guide to Flexbox</h1>
            <p>Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.</p>
        </div>
    </div>
  )
}

export default MainComponent