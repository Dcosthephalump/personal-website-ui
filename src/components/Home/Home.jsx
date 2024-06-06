import React from 'react'
//import Beaver from '../../../public/beaver.jpg'
import styles from './styles.modules.css'

const Home = () => {
  return (
    <div>
      <div className='centeringImage'>
        <div id='biography' className='rectangle'> 
          
          <a href="#section1">
          <img src='beaver.jpg'></img>
          </a>
          <div className='aboutme'>
            <h1>David Costello</h1>
            <p>Born in 2001, I recently graduated from Arizona State University with a degree in Mathematics. I studied pure and applied topics, with a heavy emphasis in the applied subject areas during my junior and senior year. I'm married to my wonderful wife, Jadyn. We are currently anticipating the birth of our first child in early November! I am currently looking to find a job that makes use of the mathematical skillset I've already developed. Beyond a focus on formulae and phenomena, I have gained a strong skillset in logical thinking, critical analysis, and developing procedures for taking data and finding meaningful information from it.</p>
          </div>
        </div>
      </div>

      <div id='section1'>
        This is a div
      </div>
    </div>
  )
}

export default Home
