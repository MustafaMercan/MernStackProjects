import React from 'react'
import '../styles/About.css'
import multiplePizzas from '../assets/multiplePizzas.jpeg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${multiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae faucibus leo. Morbi et dui quam. Quisque dapibus ullamcorper accumsan. Integer auctor ex a dui sodales, eget ultricies purus finibus. In mi elit, porttitor at sollicitudin vel, cursus sed nibh. Sed non urna quis tortor blandit sollicitudin id et tellus. Fusce justo augue, convallis vitae lobortis nec, vulputate sed erat. Donec nisl felis, egestas in ipsum eget, suscipit feugiat lorem. Nunc vel finibus odio, in posuere justo. Sed lorem metus, auctor ac tincidunt porta, consequat non sem. Vivamus porta id lacus sed sagittis. Suspendisse at scelerisque sapien, vitae posuere erat. Curabitur pulvinar rhoncus urna, id vehicula massa tincidunt quis. Sed tempor pulvinar pellentesque. Vestibulum est sem, finibus eget sapien at, malesuada fermentum est. </p>
        </div>
    </div>
  )
}
export default About
